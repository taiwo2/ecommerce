import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../component/Header/Header';
import VerticalNav from '../component/VerticalNav';
import Footer from '../component/Footer/Footer';
import { signOutUserStart } from '../redux/user/userAction';

const AdminLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" 
                onClick={() => signOut()}
                >
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;