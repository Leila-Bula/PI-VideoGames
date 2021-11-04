import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing';
import Create from './components/Created';

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
          <Route exact path='/details/:id' render={(props) =><><p>{props.match.params.id}</p></>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
