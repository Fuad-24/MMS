import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import SignUpAsWorker from './components/SignUpAsWorker/SignUpAsWorker';
import UserProfile from './components/UserProfile/UserProfile'
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import SignUp1 from './components/SignUp_1/SignUp_1';
function App() {
  return (
    <div className="App">
      <div id="body">
        {
        //<LandingPage/>
        //<Login/>
        <SignUp1/>
        //<SignUpAsWorker/>
        //<SignUpAsClient/>
        //<ClientSearchPage/>
        //<UserProfile/>
        }
      </div>
    </div>
  );
}

export default App;
