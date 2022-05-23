import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import SignUp1 from './components/SignUp_1/SignUp_1';
import SignUpAsWorker from './components/SignUpAsWorker/SignUpAsWorker';
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import UserProfile from './components/UserProfile/UserProfile';
import ClientSearchResult from './components/Client/ClientSearchResult/SearchResult';
import ClientHirePage from './components/Client/ClientHirePage/HirePage';
import WorkersRequestPage from './components/Worker/WorkerRequestPage/WorkerRequestPage';
import WorkersWorkPage from './components/Worker/WorkerWorkPage/WorkerWorkPage';

function App() {
  return (
    <div className="App">
      <div id="body">
        {
        //<LandingPage/>
        //<Login/>
        //<SignUp1/>
        //<SignUpAsWorker/>
        //<SignUpAsClient/>
        //<ClientSearchPage/>
        //<ClientSearchResult/>
        //<ClientHirePage/>
        <WorkersRequestPage/>
        //<WorkersWorkPage/>
        //<UserProfile/>
        }
      </div>
    </div>
  );
}

export default App;
