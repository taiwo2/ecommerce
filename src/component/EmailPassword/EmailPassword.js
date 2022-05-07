import React, { useEffect, useState } from 'react';
import Button from '../Forms/Button/Button';
import FormInput from '../Forms/FormInput/FormInput';
import { auth } from '../../firebase/utils';
import './emailpaswd.scss';
import AuthWrapper from '../AuthWrapper/Authwrapper';
import { useNavigate,useHistory  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordSuccess ,resetAuth } from '../../redux/user/userAction';
const mapState = ({user}) => ({
  signUpError: user.userError,
 resetPwd: user.resetPasswordSuccess,
})
const EmailPassword = (props) => {
  const {signUpError,resetPwd} = useSelector(mapState)
  const [email,setEmail] = useState('');
  const [errors,setErrors] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const handleChange = (e) => {
  //   const {name,value} = e.target;
  //   setEmail({ [name]: value})
  // }

  useEffect(() =>{
    if(resetPwd){
      // dispatch(resetAuth());
    navigate('/login')
    }
  },[resetPwd])
  useEffect(() =>{
    if (Array.isArray(signUpError) && signUpError.length > 0){
     setErrors(signUpError)
    }
  },[signUpError])
  const handleSubmit = (e) => {
    e.prevent.Default();
    dispatch(resetPasswordSuccess({email}))
  
  }

  const configEmail = {
    headline: 'email Password'
  }
  return (
    <AuthWrapper {...configEmail}>      
      <div className='formWrap'>
        {errors.length > 0 && (
          <ul>
            {errors.map((err,i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
        {email}
          <FormInput
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          
          <Button type='submit'>email Pasword</Button>
        </form>
        </div>
  
      </AuthWrapper>
  )
}

export default EmailPassword
