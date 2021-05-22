import F1API from "../data/F1API";
import ConstructorDataProvider from "../data/ConstructorDataProvider";

export const getConstructors = async (dispatch) => {
  try {
    //using class
    //const dataProvider = new ConstructorDataProvider(ErgastF1API);
    //using Revealing Module Pattern
    const dataProvider = ConstructorDataProvider;
    dataProvider.setApi(F1API);

    let data = [];
    if (localStorage.getItem("f1-constructors")) {
      data = JSON.parse(localStorage.getItem("f1-constructors"));
      dispatch({ type: "SET_CONSTRUCTORS", constructors: data });
      return;
    }
    if (data.length === 0) {
      //using class
      //await dataProvider.loadConstructorsWithDrivers("current");
      //const constructors = dataProvider.constructorStandings;

      //using Revealing Module Pattern
      const constructors = await dataProvider.loadConstructorsWithDrivers(
        "current"
      );
      console.log(
        "dataProvider.constructorStandings",
        dataProvider.constructorStandings
      );
      console.log(
        "dataProvider.getConstructorStandings(),",
        dataProvider.getConstructorStandings()
      );

      //const constructors = await ErgastF1API.getConstructors();
      //localStorage.setItem("f1-constructors", JSON.stringify(constructors));
      console.log("SET_CONTRUCTORS", constructors);
      dispatch({ type: "SET_CONSTRUCTORS", constructors: constructors });
    }
  } catch (error) {
    console.error(error);
  }
};
export const getRaces = async (dispatch) => {
  try {
    if (localStorage.getItem("f1-races")) {
      const data = JSON.parse(localStorage.getItem("f1-races"));
      dispatch({ type: "SET_RACES", races: data });
      return;
    }
    const data = await F1API.getRaces();
    localStorage.setItem("f1-races", JSON.stringify(data));
    dispatch({ type: "SET_RACES", races: data });
  } catch (error) {
    console.error(error);
  }
};
export const getDrivers = async (dispatch) => {
  try {
    const data = await F1API.getDrivers();
    console.log("getDrivers", data);
    dispatch({ type: "SET_DRIVERS", drivers: data });
  } catch (error) {
    console.error(error);
  }
};
export const getDriverSeasonResults = async (driverId, dispatch) => {
  try {
    const data = await F1API.getDriverSeasonResults(driverId);
    console.log("getDriverSeasonResults", data);
    dispatch({
      type: "SET_DRIVER_SEASON_RESULTS",
      results: { driverId, data },
    });
  } catch (error) {
    console.error(error);
  }
};
export const setRaceResult = async (round, dispatch) => {
  try {
    const race = await F1API.getRaceResults(round);
    dispatch({ type: "SET_RACE_RESULT", round: round, results: race });
    //getDriversLapTimes(round, race, dispatch);
  } catch (error) {
    console.error(error);
  }
};
export const setQualifyingResult = async (round, dispatch) => {
  try {
    const data = await F1API.getQualifyingResults(round);
    dispatch({ type: "SET_QUALIFYING_RESULT", round: round, results: data });
  } catch (error) {
    console.error(error);
  }
};

/*
function getDriversLapTimes(round, race, dispatch) {
  //TODO: This is very slow, find a new way to optimize, or re-design data presentation
  let driverLapTimes = race.reduce(async (initial, current) => {
    let collection = await initial;

    const lapTimes = await ErgastF1API.getRaceLapTimesForDriver(
      round,
      current.Driver.driverId
    );
    console.log("lap", lapTimes);
    console.log("current", current);

    collection.push(lapTimes);
    return collection;
  }, Promise.resolve([]));
  console.log("Driver Lap Times", driverLapTimes);
  dispatch({
    type: "SET_RACE_LAP_TIMES",
    round: round,
    results: driverLapTimes,
  });
}
*/
