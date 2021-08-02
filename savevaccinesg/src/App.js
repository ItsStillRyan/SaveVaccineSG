import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

//IMPORT PAGES
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import ProfilePage from './pages/profilePage';
import Dashboard from './pages/dashboardPage'
import RequestPage from './pages/requestPage'
import SubmitPage from './pages/submitPage'
import LostPage from './pages/lostPage';

export default function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            {/* MAIN REDIRECTS */}
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/profile/:username" component={ProfilePage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/dashboard/:username" component={Dashboard}/>
            <Route exact path="/request/:username" component={RequestPage}/>
            <Route exact path="/submit/:username" component={SubmitPage}/>
            {/* WRONG PAGE 404 */}
            <Route path="/404" component={LostPage}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
    </div>
  );
}
