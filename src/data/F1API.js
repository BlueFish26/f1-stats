import axios from "axios";

//Revealing Module Pattern
const F1API = (function () {
  console.log("F1API created.");
  const apiEndpoint = "http://ergast.com/api/f1";

  //public methods
  const getConstructorDrivers = async (season, constructorId) => {
    try {
      const response = await axios.get(
        `http://ergast.com/api/f1/${season}/constructors/${constructorId}/drivers.json`
      );
      const data = response.data.MRData.DriverTable.Drivers;
      console.log("Drivers ▶️", data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getConstructors = async (season) => {
    try {
      const response = await axios.get(
        `http://ergast.com/api/f1/${season}/constructorStandings.json`
      );
      return response.data.MRData.StandingsTable.StandingsLists[0]
        .ConstructorStandings;

      // append drivers
      /*
      let updatedConstructors = await constructors.reduce(
        async (initial, current) => {
          let collection = await initial;
          const constructorId = current.Constructor.constructorId;
          const drivers = await getConstructorDrivers(constructorId);
          current.drivers = drivers;
          collection.push(current);
          return collection;
        },
        Promise.resolve([])
      );

      return updatedConstructors;
      */
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getRaces = async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/current.json`);
      let data = response.data.MRData.RaceTable.Races;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getDrivers = async () => {
    try {
      const response = await axios.get(
        `${apiEndpoint}/current/driverStandings.json`
      );
      return response.data.MRData.StandingsTable.StandingsLists[0]
        .DriverStandings;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getRaceResults = async (round) => {
    try {
      const response = await axios.get(
        `${apiEndpoint}/current/${round}/results.json`
      );
      let data = [];
      if (response.data.MRData.RaceTable.Races[0]) {
        data = response.data.MRData.RaceTable.Races[0].Results;
      }
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getQualifyingResults = async (round) => {
    try {
      const response = await axios.get(
        `http://ergast.com/api/f1/current/${round}/qualifying.json`
      );
      let data = [];
      if (response.data.MRData.RaceTable.Races[0]) {
        data = response.data.MRData.RaceTable.Races[0].QualifyingResults;
      }
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getDriverSeasonResults = async (driverId) => {
    try {
      const response = await axios.get(
        `http://ergast.com/api/f1/current/drivers/${driverId}/results.json`
      );
      let data = [];
      if (response.data.MRData.RaceTable.Races[0]) {
        data = response.data.MRData.RaceTable.Races;
      }
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getRaceLapTimesForDriver = async (round, driverId) => {
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
      return null;
    }
  };

  return {
    getConstructorDrivers,
    getConstructors,
    getRaces,
    getDrivers,
    getDriverSeasonResults,
    getRaceResults,
    getQualifyingResults,
    getRaceLapTimesForDriver,
  };
})();

export default F1API;
