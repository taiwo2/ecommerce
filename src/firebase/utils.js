import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './config';


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt: 'select_account'});
// const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider)

 export const handleUserProfile = async ({userAuth, additionalData}) => {
   if (!userAuth) return;
   const {uid} = userAuth;

   const useRef = firestore.doc(`users/${uid}`)

   const snapshot = await useRef.get();
   if (!snapshot.exists) {
     const {displayName,email} = userAuth;
     const timestamp = new Date();

     try{
      await useRef.set({
        displayName,
        email,
        createdDate : timestamp,
        ...additionalData
      })
     }catch(err) {
      //  console.log(err)
     }
   }
   return useRef;
 }

 export const getCurrentUser = () => {
   return new Promise((resolve,reject) =>{
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
       unsubscribe();
       resolve(userAuth)
     }, reject)
   })
 }

// export default signInWithGoogle;