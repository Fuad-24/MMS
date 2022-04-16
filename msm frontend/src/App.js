import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import UserProfile from './components/UserProfile/UserProfile'
import Demo from './components/common/Demo';
function App() {
  return (
    <div className="App">
      <div id="body">
        {
        //<LandingPage/>
        //<Login/>
       // <ClientSearchPage/>
        //<UserProfile/>
        <Demo />
        }
      </div>
    </div>
  );
}

export default App;
