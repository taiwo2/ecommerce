import { takeLatest,put,all,call } from "@redux-saga/core/effects";
import { auth,handleUserProfile,GoogleProvider,getCurrentUser } from '../../firebase/utils';
import { handleresetPasswordAPI } from "./userHelper";
import { signInSuccess,signOutUserSuccess,userError,resetPasswordSuccess } from "./userAction";
import * as types from './userType'

export function* getSnapShortAuthUser(user, additionalData={}){
  try{
    const userRef = yield call(handleUserProfile,{userAuth: user,additionalData});
    const snapshot = yield userRef.get()
    yield put(
      signInSuccess({
        id: snapshot.id,
          ...snapshot.data()
      })
    )
  }catch(er){
    // console.loog(er)
  }
 
}
export function* emailSignIn({payload: {email,password}}) {
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapShortAuthUser(user)
  }catch(err){
    // console.log(er)
  }
}
export function* onEmailStart() {
  yield takeLatest(types.EMAIL_SIGN_IN_START,emailSignIn)
}

export function* isAuthenticated() {
  try{
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShortAuthUser(userAuth)
 
  } catch (err) {
   //  console.log(err)
  }
 }
 
 
 export function* OncheckUsersession() {
   yield takeLatest(types.CHECK_USER_SESESION,isAuthenticated)
 }

 export function* userSignOut() {
   try{
     yield auth.signOut()
     yield put(signOutUserSuccess())
   }catch (err) {
     // console.log(err)
  }
}

export function* OnsignOutStart() {
  yield takeLatest(types.SIGN_OUT_USER_START,userSignOut)
}

export function* signUpUser({payload: {
  displayName,
  email,
  password,
  confirmPassword
}}) {
  if (password !== confirmPassword) {
    const err= ['password those not match'];
    yield put(
      userError(err)
    )
    return;
  }
  try{
    const { user } = yield auth.createUserWithEmailAndPassword(email,password);
    const additionalData = {displayName}
    yield getSnapShortAuthUser(user,additionalData)
    // yield call(handleUserProfile({userAuth: user, additionalData: {displayName}}))
    
    }catch(err) {
    // console.log(err)
  }

}

export function* OnSignUpUserStart() {
  yield takeLatest(types.SIGN_UP_USER_START,signUpUser) 
}

export function* resetPassword({payload: {email}}) {
  try {
    yield call(handleresetPasswordAPI,email)
    yield put(resetPasswordSuccess())
  }catch(err) {
    yield put(userError(err))
  }
}
export function* onResetpasswordStart() {
  yield takeLatest(types.RESET_PASSWORD_START,resetPassword)
}
export default function* userSaga(){
  yield all([
    call(onEmailStart),
    call(OncheckUsersession),
    call(OnsignOutStart),
    call(OnSignUpUserStart),
    call(onResetpasswordStart),

  ],
  )
}