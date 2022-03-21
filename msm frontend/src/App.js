import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import LandingPage from './components/Landing_page/Landing_page';
import Login from './components/Login/Login'
function App() {
  return (
    <div className="App">
      <div id="body">
        {
        <LandingPage/>
        //<Login/>
        }
      </div>
    </div>
  );
}

export default App;
