import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

//IMPORT PAGES
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import Dashboard from './pages/dashboardPage'
import RequestPage from './pages/requestPage'
import SubmitPage from './pages/submitPage'
import LostPage from './pages/lostPage';




function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/request" component={RequestPage}/>
            <Route exact path="/submit" component={SubmitPage}/>
            <Route path="/404" component={LostPage}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
