import axios from 'axios';
import { Constructor } from '../models/Constructor';

//Revealing Module Pattern
const F1Database = (function () {
  const apiEndpoint = 'http://ergast.com/api/f1';

  //private method
  async function getConstructorDrivers(constructorId) {
    try {
      const response = await axios.get(
        `http://ergast.com/api/f1/current/constructors/${constructorId}/drivers.json`
      );
      const data = response.data.MRData.DriverTable.Drivers;
      console.log('Drivers ▶️', data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  //public methods
  const getConstructors = async () => {
    try {
      const response = await axios.get(
        'http://ergast.com/api/f1/current/constructorStandings.json'
      );
      let constructors =
        response.data.MRData.StandingsTable.StandingsLists[0]
          .ConstructorStandings;

      let _constructors =
        response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
          (result) => {
            const { constructorId, name, nationality, url } =
              result.Constructor;
            let constructor = new Constructor(constructorId, name, nationality);
            constructor.url = url;
            console.log(constructor.constructor.name);
            return constructor;
          }
        );
      console.log('_constructors', _constructors);
      // append drivers
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
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getRaces = async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/current.json`);
      let data = response.data.MRData.RaceTable.Races;
      data.map((race) => {
        switch (race.Circuit.circuitId) {
          case 'ricard':
          case 'silverstone':
          case 'zandvoort':
            race.Circuit.circuitImagePath = `imgs/circuits/${race.Circuit.circuitId}.png`;
            break;
          default:
            race.Circuit.circuitImagePath = `imgs/circuits/${race.Circuit.circuitId}.svg`;
        }
        return race;
      });
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
    getConstructors,
    getRaces,
    getDrivers,
    getDriverSeasonResults,
    getRaceResults,
    getQualifyingResults,
    getRaceLapTimesForDriver,
  };
})();

export default F1Database;
