import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing';
import Create from './components/Created';
import Detail from './components/Details';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/details/:id' render={(props) =><><Detail props={props} /></>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
