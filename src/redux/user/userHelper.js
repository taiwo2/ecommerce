import { auth,handleUserProfile, getCurrentUser } from "../../firebase/utils";

export const handleresetPasswordAPI = (email) => {
  const config = {
    url: 'http://localhost:3000/login'
  }
  return new Promise((resolve,reject) => {
    auth.sendPasswordResetEmail(email,config)
      .then(() =>{
        resolve()
    })
    .catch(() =>{
      const err = ['something wrong'];
      // setErrors(err)
       reject(err)
    })
  })
}


