import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import UserProfile from './components/UserProfile/UserProfile'
import ViewUserProfile from './components/UserProfile/ViewUserProfile';
import { useState } from 'react';
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
      <ViewUserProfile user_email={user} searchedLocation={searchedLocation}/>
        }
      </div>
    </div>
  );
}

export default App;
