import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Teams from './views/Teams';
import Races from './views/Races';
import Drivers from './views/Drivers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/races">
          <Races />
        </Route>
        <Route path="/drivers">
          <Drivers />
        </Route>
        <Route path="/" component={Teams} exact />
      </Switch>
    </div>
  );
}

export default App;
