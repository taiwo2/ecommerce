import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin} from '../../Utils';
import './style.scss'
const mapState = ({user}) => ({
  currentuser: user.currentUser,
})
const AdmintoolBar = () => {
  const {currentuser} = useSelector(mapState)
  const isAdmin = checkUserIsAdmin(currentuser)
  if (!isAdmin) return null
  return (
  <div className='admintoolbar'>
   <ul>
     <li>
     <Link to='/admin'>
            My Admin
        </Link>
     </li>
   </ul>
  </div>
  );
};

export default AdmintoolBar;
