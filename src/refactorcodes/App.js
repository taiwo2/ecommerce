// import { useEffect } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
// import Header from './component/Header/Header';
// import Sigin from './component/Signin/Signin';
// import Registration from './pages/Registration/Registration';
// import HomePagelayout from './layouts/HomePageLayout';
// import HomePage from './pages/HomePage/HomePage';
// // hoc
// import WithAuth from './component/hoc/WithAuth';

// import { auth } from './firebase/utils';
// import Mainlayout from './layouts/Mainlayout';
// import { handleUserProfile } from './firebase/utils';
// import Recovery from './pages/Recovery/Recovery';
// import { useSelector,useDispatch } from 'react-redux';
// import { setCurrentUser } from './redux/user/userAction';
// import Dashboard from './pages/Dashboard';


// const App  = (props) => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     const authListerner = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const useRef = await handleUserProfile(userAuth);
//         useRef.onSnapshot(snapshot => {
//           dispatch(setCurrentUser({
//               id: snapshot.id,
//           ...snapshot.data()
//         }))
//       })
//       };

//       dispatch(setCurrentUser(userAuth))
//     });
//     return () => {authListerner()};
//   },)
 
//   return (
//     <div>
//      <Router>
//         <Routes>
//           <Route  path='/' 
//            element={
//             <HomePagelayout >
//               <HomePage />
//             </HomePagelayout>
//           } exact />
//           <Route exact  path='/login' element={
//             <>
//             {/* {currentUser ? <Navigate  to='/' /> : ( */}
//           <Mainlayout >
//           <Sigin/>
//         </Mainlayout>
//         {/* )} */}
//         </>
//         }/>
//           <Route exact  path='/registration' element={
//              <>
//            <Mainlayout>
//             <Registration/>
//             </Mainlayout>
//          </>
//           }/>
//           <Route exact  path='/recovery' element={
//              <>
//            <Mainlayout>
//             <Recovery/>
//             </Mainlayout>
        
//          </>
//           }/>
//           <Route exact  path='/dashboard' element={
//              <>
//             <WithAuth>
//            <Mainlayout>
//             <Dashboard/>
//             </Mainlayout>
//             </WithAuth>
//          </>
//           }/>
//           {/* <Route exact  path='*' element={<Error/>}/> */}
//         </Routes>
        
//       </Router>
//     </div>
//   );
// }


// export default App;
