import React, { useState,useEffect } from 'react';
import Button from '../Forms/Button/Button';
import FormInput from '../Forms/FormInput/FormInput';
import './signup.scss';


const Signup = (props) => {
const [email,setEmail] = useState('')
const [password,setPassWord] = useState('')
const [displayName,setDisplayName] = useState('')
const [confirmPassword,setConfirmPassWord] = useState('')
const [error, setError] = useState([])

  return (
    
      <div className='formWrap'>
        <form >
          <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          placeholder='Full Name'
          onChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput 
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput 
          type='password'
          name='password'
          value={password}
          placeholder=' Password'
          onChange={(e) => setPassWord(e.target.value)}
          />
          <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          placeholder='Confirm Password'
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
  )
}

export default Signup
