// import { auth,handleUserProfile,GoogleProvider } from '../../firebase/utils';
// import * as types from './userType'

// // for redux-sags for handling async functions

// export const emailStart = userCredential => ({
//   type: types.EMAIL_SIGN_IN_START,
//   payload: userCredential
// })
// export const signInSuccess = user => ({
//   type: types.SIGN_IN_SUCCESSFUL,
//   payload: user
// })



// /// for redux thunk for handling async function
// export const setCurrentUser = user => ({
//   type: types.CURRENT_USER,
//   payload: user
// })

// export const resetAuth = () => ({
//  type: types.RESET_AUTH
// })
// export const signInUser = ({email,password}) => async dispatch => {
//   try{
//     await auth.signInWithEmailAndPassword(email,password);
//     dispatch({
//       type: types.SIGN_IN_SUCCESS,
//       payload: true
//     })
//   }catch(err){
//     // console.log(er)
//   }
// }
// export const signUpUser = ({email,password,confirmPassword,displayName}) => async dispatch => {
//   if (password !== confirmPassword) {
//     const err = ["Password Don\'t match"]
//     dispatch({
//       type: types.SIGN_IN_ERROR,
//       payload: err
//     })
//     return;
//   }
//   try{
//     const {user} = await auth.createUserWithEmailAndPassword(email,password);
//     await handleUserProfile(user,{displayName});
//     dispatch({
//       type: types.SIGN_UP_SUCCESS,
//       payload: true,
//     })
//   }catch(err){
//     // console.log(er)
//   }
// }
// export const resetPassword = ({email}) => async dispatch => {
//   try {
//     const config = {
//       url: 'https://localhost:3000/login'
//     }
//     await auth.sendPasswordResetEmail(email,config)
//       .then(() =>{
//       // console.log('suceees')
//       dispatch({
//         type: types.RESET_PASSWORD_SUCCESS,
//         payload: true
//       })
//       // 
     
//     })
//     .catch(() =>{
//       const err = ['something wrong'];
//       dispatch({
//         type: types.RESET_PASSWORD_ERROR,
//         payload: err
//       })
//     })
//   }catch(err) {
//     // console.log(err)
//   }
// }

// export const signInWithGoogle = () => async dispatch => {

//   try{
//     await  auth.signInWithPopup(GoogleProvider)
//       .then(() => {
//         dispatch({
//           type: types.SIGN_IN_SUCCESS,
//           payload: true
//         })
//       })
//   }catch(er){
//     // console.log(er)
//   }
 
// }
