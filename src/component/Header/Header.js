import React from 'react'
import './header.scss'
import logo from '../../assets/logo1.jpg'
import {Link} from 'react-router-dom'
const Header = () => {
 
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='callToAction'>
          
            <ul>
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
          
        </div>
      </div>
    </header>
  )
}


export default Header;
