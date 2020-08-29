import axios from "axios";

export const getConstructors = async (dispatch) => {
  try {
    let data = [];
    if (localStorage.getItem("f1-constructors")) {
      data = JSON.parse(localStorage.getItem("f1-constructors"));
      dispatch({ type: "SET_CONSTRUCTORS", constructors: data });
      return;
    }
    if (data.length === 0) {
      const response = await axios.get(
        "http://ergast.com/api/f1/current/constructorStandings.json"
      );
      data =
        response.data.MRData.StandingsTable.StandingsLists[0]
          .ConstructorStandings;
      let updatedData = await data.reduce(async (initial, current) => {
        let collection = await initial;
        const constructorId = current.Constructor.constructorId;
        const drivers = await getConstructorDrivers(constructorId);
        current.drivers = drivers;
        collection.push(current);
        return collection;
      }, Promise.resolve([]));
      localStorage.setItem("f1-constructors", JSON.stringify(updatedData));
      dispatch({ type: "SET_CONSTRUCTORS", constructors: updatedData });
    }
  } catch (error) {
    console.error(error);
  }
};

async function getConstructorDrivers(constructorId) {
  try {
    const response = await axios.get(
      `http://ergast.com/api/f1/current/constructors/${constructorId}/drivers.json`
    );
    const data = response.data.MRData.DriverTable.Drivers;
    console.log("Drivers ▶️", data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getRaces = async (dispatch) => {
  try {
    if (localStorage.getItem("f1-races")) {
      const data = JSON.parse(localStorage.getItem("f1-races"));
      dispatch({ type: "SET_RACES", races: data });
      return;
    }
    const response = await axios.get("http://ergast.com/api/f1/current.json");
    const data = response.data.MRData.RaceTable.Races;
    localStorage.setItem("f1-races", JSON.stringify(data));
    dispatch({ type: "SET_RACES", races: data });
  } catch (error) {
    console.error(error);
  }
};

export const setRaceResult = async (round, dispatch) => {
  try {
    const response = await axios.get(
      `http://ergast.com/api/f1/current/${round}/results.json`
    );
    let data = [];
    if (response.data.MRData.RaceTable.Races[0]) {
      data = response.data.MRData.RaceTable.Races[0].Results;
    }
    dispatch({ type: "SET_RACE_RESULT", round: round, results: data });
    getDriversLapTimes(round, data, dispatch);
  } catch (error) {
    console.error(error);
  }
};

export const setQualifyingResult = async (round, dispatch) => {
  try {
    const response = await axios.get(
      `http://ergast.com/api/f1/current/${round}/qualifying.json`
    );
    let data = [];
    if (response.data.MRData.RaceTable.Races[0]) {
      data = response.data.MRData.RaceTable.Races[0].QualifyingResults;
    }
    dispatch({ type: "SET_QUALIFYING_RESULT", round: round, results: data });
  } catch (error) {
    console.error(error);
  }
};

function getDriversLapTimes(round, race, dispatch) {
  //TODO: This is very slow, find a new way to optimize, or re-design data presentation
  let driverLapTimes = race.reduce(async (initial, current) => {
    let collection = await initial;
    const lapTimes = await getRaceLapTimesForDriver(
      round,
      current.Driver.driverId
    );
    collection = lapTimes;
    return collection;
  }, Promise.resolve([]));
  dispatch({
    type: "SET_RACE_LAP_TIMES",
    round: round,
    results: driverLapTimes,
  });
}

async function getRaceLapTimesForDriver(round, driverId) {
  try {
    const response = await axios.get(
      `http://ergast.com/api/f1/current/${round}/drivers/${driverId}/laps.json?limit=75`
    );
    let data = {};
    if (response.data.MRData.RaceTable.Races[0]) {
      data = response.data.MRData.RaceTable.Races[0].Laps;
    }
    return { driverId: driverId, lap_times: data };
  } catch (error) {
    console.error(error);
  }
}
