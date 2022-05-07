import React from 'react'
import './header.scss'
import logo from '../../assets/logo1.jpg'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/utils';
import { useSelector,useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/userAction';
const mapState = ({user}) => ({
currentUser: user.currentUser
})

const Header = (props) => {
 const {currentUser} =useSelector(mapState);
 const dispatch = useDispatch();

 const signOut = () => {
   dispatch(signOutUserStart())
 }
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
            <Link to='/'>
              Home
          </Link>
            </li>
            <li>
            <Link to='/search'>
              Search
          </Link>
            </li>
          </ul>
        </nav>

        <div className='callToAction'>
        {currentUser && (
              <ul>
              <li>
                <Link to={'/dashboard'}>
                  Dashboard
                </Link>
            </li>
              <li>
              <span onClick={() => signOut()}>
              Logout
              </span>
                
            </li>
            </ul>
            )}
          {!currentUser && (
            <ul>
              <li>
              <Link to={'/dashboard'}>
                Dashboard
             </Link>
            </li>
              <li>
              <Link to={'/registration'}>
                Register
             </Link>
            </li>
            <li>
              <Link to={'/login'}>
                Login
             </Link>
            </li>
            </ul>
          )}
            
              
          
        </div>
      </div>
    </header>
  )
}

Header.defaultProps ={
  currentUser: null,
}



export default Header;
