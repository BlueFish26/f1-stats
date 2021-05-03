import { Switch, Route } from "react-router-dom";
import { F1ContextProvider } from "./contexts/F1Context";
import f1Reducer, { initialState } from "./reducers/f1Reducer";
import NavBar from "./components/NavBar";
import Teams from "./views/Teams";
import Drivers from "./views/Drivers";
import RaceSchedule from "./views/RaceSchedule";
import Race from "./views/Race";

const App = () => {
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
          <Route path="/race/:circuitId">
            <Race />
          </Route>
          <Route path="/drivers">
            <Drivers />
          </Route>
          <Route path="/" component={Teams} exact />
        </Switch>
      </F1ContextProvider>
    </div>
  );
};

export default App;
