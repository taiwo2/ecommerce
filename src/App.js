import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Header from './component/Header/Header';
import Sigin from './component/Signin/Signin';
import Registration from './pages/Registration/Registration';
import HomePagelayout from './layouts/HomePageLayout';
import HomePage from './pages/HomePage/HomePage';
// hoc
import './default.scss'

import AdminLayout from './layouts/AdminLayout'
import WithAuth from './component/hoc/WithAuth';
import { auth } from './firebase/utils';
import Mainlayout from './layouts/Mainlayout';
import { handleUserProfile } from './firebase/utils';
import Recovery from './pages/Recovery/Recovery';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';
import Dashboard from './pages/Dashboard';
import WithAdmin from './component/hoc/WithAdmin';
import Admin from './pages/Admin';
import Search from './pages/Search';
import { checkusersuccess } from './redux/user/userAction';
import AdmintoolBar from './component/AdminToolBar';

const App  = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkusersuccess())
    
  },[])
 
  return (
    <div>

     <Router>
     <AdmintoolBar />

        <Routes>
          <Route  path='/' 
           element={
            <HomePagelayout >
              <HomePage />
              
            </HomePagelayout>
          } exact />
          <Route exact  path='/login' element={
            <>
            {/* {currentUser ? <Navigate  to='/' /> : ( */}
          <Mainlayout >
          <Sigin/>
        </Mainlayout>
        {/* )} */}
        </>
        }/>
          <Route exact  path='/registration' element={
           <Mainlayout>
            <Registration/>
            </Mainlayout>
          }/>
          <Route exact  path='/recovery' element={
           <Mainlayout>
            <Recovery/>
            </Mainlayout>
          }/>
          <Route exact  path='/search' element={
           <Mainlayout>
            <Search/>
            </Mainlayout>
          }/>
          <Route exact  path='/search/:filterType' element={
           <Mainlayout>
            <Search/>
            </Mainlayout>
          }/>
          <Route exact  path='/dashboard' element={
            <WithAuth>
           <Mainlayout>
            <Dashboard/>
            </Mainlayout>
            </WithAuth>
          }/>
          <Route exact  path='/admin' element={
           <WithAdmin>
           <AdminLayout>
            <Admin/>
            </AdminLayout>
            </WithAdmin>
            
          
          }/>
          {/* <Route exact  path='*' element={<Error/>}/> */}
        </Routes>
        
      </Router>
    </div>
  );
}


export default App;
