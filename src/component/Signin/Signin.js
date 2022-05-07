import React,{useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Forms/Button/Button';
import FormInput from '../Forms/FormInput/FormInput';
import AuthWrapper from '../AuthWrapper/Authwrapper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './signin.scss';
import { emailSignInStart,signInWithGoogle,resetAuth} from '../../redux/user/userAction';

const mapState = ({user}) => ({
  currentUser: user.currentUser
})
const Sigin = (props) => {
  const {currentUser} = useSelector(mapState)
  const [email,setEmail] = useState('')
  const [password,setPassWord] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reset = () => {
    setEmail('')
    setPassWord('')
  }

  useEffect(() =>{
    if(currentUser){
      reset();
      // dispatch(resetAuth());
    navigate('/')
    }
  },[currentUser])
 
const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(emailSignInStart({email,password}))
}

const handleSignInGoogle = () => {
  dispatch(signInWithGoogle())
}
const configLogin = {
  headline: 'login'
}
  return (
    <>
    <AuthWrapper {...configLogin}>
      <div className='formWrap'>
        <form onSubmit={handleSubmit}>
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
              <Button onClick={handleSignInGoogle}>
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className='links'>
            <Link to='/recovery'> reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
      </>
  )
}

export default Sigin
