import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cargando from './components/cargando';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/'>
            <p>Landing page</p>
          </Route>
          <Route exact path='/home'>
            <Cargando Component={Home} />
          </Route>
          <Route exact path='/create'>
            <p>Create page</p>
          </Route>
          <Route exact path='/details/:id' render={(props) =><><p>{props.match.params.id}</p></>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
