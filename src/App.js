import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Sigin from './component/Signin/Signin';
import Registration from './pages/Registration/Registration';
import HomePagelayout from './layouts/HomePageLayout';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route exact path='/' 
           render={() => (
            <HomePagelayout >
              <HomePage />
            </HomePagelayout>
          )} />
          <Route exact  path='/login' element={<Sigin/>}/>
          <Route exact  path='/registration' element={<Registration/>}/>
          {/* <Route exact  path='*' element={<Error/>}/> */}
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
