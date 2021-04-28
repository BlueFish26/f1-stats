import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Teams from "./views/Teams";
import Races from "./views/Races";
import Drivers from "./views/Drivers";
import { F1ContextProvider } from "./contexts/F1Context";
import f1Reducer, { initialState } from "./reducers/f1Reducer";
import RaceSchedule from "./views/RaceSchedule";

function App() {
  return (
    <div className="App">
      <F1ContextProvider initialState={initialState} reducer={f1Reducer}>
        <NavBar />
        <Switch>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/races">
            <RaceSchedule />
          </Route>
          <Route path="/drivers">
            <Drivers />
          </Route>
          <Route path="/" component={Teams} exact />
        </Switch>
      </F1ContextProvider>
    </div>
  );
}

export default App;
