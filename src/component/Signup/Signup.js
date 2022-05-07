import React, { useState,useEffect } from 'react';
import Button from '../Forms/Button/Button';
import FormInput from '../Forms/FormInput/FormInput';
import './signup.scss';
import AuthWrapper from '../AuthWrapper/Authwrapper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOpUserStart} from '../../redux/user/userAction';

const mapState = ({user} )=> ({
  signUpError: user.userError,
  currentUser: user.currentUser
})
const Signup = (props) => {
  const {signUpError,currentUser} = useSelector(mapState)
  const [email,setEmail] = useState('')
  const [password,setPassWord] = useState('')
  const [displayName,setDisplayName] = useState('')
  const [confirmPassword,setConfirmPassWord] = useState('')
  const [errors, setError] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();


useEffect(() =>{
  if(currentUser){
    reset();
    // dispatch(resetAuth());
    navigate('/')
  }
},[currentUser])

useEffect(() =>{
  if(Array.isArray(signUpError) && signUpError.length > 0){
   setError(signUpError)
  }
},[signUpError])

const reset = () => {
  setConfirmPassWord('')
  setEmail('')
  setPassWord('')
  setError('')
  setDisplayName('')
  setError([])
}
const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(signOpUserStart({
    displayName,email,password,confirmPassword,
  }))
}
const configSignup = {
  headline: 'signup'
}
  return (
    <AuthWrapper {...configSignup}>
      <div className='formWrap'>
        {errors.length > 0 && (
          errors.map((er,idx) => (
            <ul key={idx}>
              <li key={idx}>
                {er}
              </li>
            </ul>
          ))
        )}
        <form onSubmit={handleSubmit}>
          <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          placeholder=' Full Name'
          onChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput 
          type='email'
          name='email'
          value={email}
          placeholder=' Email'
          onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput 
          type='password'
          name='password'
          value={password}
          placeholder=' password'
          onChange={(e) => setPassWord(e.target.value)}
          />
          <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          placeholder=' confirm Password'
          onChange={(e) => setConfirmPassWord(e.target.value)}
          />
          <div className='socialwrap'>
            <div className='row'>
              <Button type='submit' >
                Register
              </Button>
            </div>
          </div> 
        </form>
      </div>
    </AuthWrapper>
  )
}

export default Signup
