import React,{useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Forms/Button/Button';
import FormInput from '../Forms/FormInput/FormInput';

import './signin.scss';

const Sigin = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassWord] = useState('')
  

  return (
      <div className='formWrap'>
        <form >
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
            placeholder='password'
            onChange={(e) => setPassWord(e.target.value)}
          />
          <Button type='submit'>login</Button>
          <div className='socialwrap'>
            <div className='row'>
              <Button >
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className='links'>
            <Link to='/recovery'> reset Password</Link>
          </div>
        </form>
      </div>
  )
}

export default Sigin
