import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
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
        {
        //<LandingPage/>
       //<Login/>
       //<ClientSearchPage/>
      //<UserProfile/>
      //<ViewUserProfile user_email={user} searchedLocation={searchedLocation}/>
        <SignUp1/>
        //<SignUpAsWorker/>
        //<SignUpAsClient/>
        }
      </div>
    </div>
  );
}

export default App;
