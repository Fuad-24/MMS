import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import SignUpAsWorker from './components/SignUpAsWorker/SignUpAsWorker';
import UserProfile from './components/UserProfile/UserProfile'
import ViewUserProfile from './components/UserProfile/ViewUserProfile';
import { useState } from 'react';
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import SignUp1 from './components/SignUp_1/SignUp_1';
function App() {
  const [user,setUser]=useState("f@gmail.com")
  const [searchedLocation,setSearchedLocation]=useState("PaikPara, B.Baria")
  return (
    
    <div className="App">
      <div id="body">
      <Router>
        <Routes>
          
        <Route path="/" exact element={<LandingPage/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/search" exact element={<ClientSearchPage/>}/>
        <Route path="/profile" exact element={<UserProfile/>}/>
        <Route path="/viewprofile" exact element={<ViewUserProfile user_email={user} searchedLocation={searchedLocation}/>}/>
        <Route path="/signup1" exact element={<SignUp1/>}/>
        <Route path="/signup2" exact element={<SignUpAsWorker/>}/>
        <Route path="/signup3" exact element={<SignUpAsClient/>}/>
          
        </Routes>
      </Router>
      </div>
    </div>

  );
}

export default App;
