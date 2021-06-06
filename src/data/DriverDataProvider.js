import { Constructor } from '../models/Constructor';
import { Driver, DriverStandings } from '../models/Driver';

export default class DriverDataProvider {
  constructor(api) {
    this.api = api;
    this.drivers = [];
    console.log('DriverDataProvider Created 👌');
  }

  getDrivers = async () => {
    try {
      const drivers = await this.api.getDrivers();
      return drivers.map((d) => {
        let driver = new Driver(
          d.Driver.driverId,
          d.Driver.permanentNumber,
          d.Driver.code,
          d.Driver.givenName,
          d.Driver.familyName
        );
        driver.url = d.Driver.url;
        driver.dateOfBirth = d.Driver.dateOfBirth;
        driver.nationality = d.Driver.nationality;
        let constructor = new Constructor(
          d.Constructors[0].constructoId,
          d.Constructors[0].name,
          d.Constructors[0].nationality
        );
        constructor.url = d.Constructors[0].url;
        return new DriverStandings(
          d.position,
          d.points,
          d.wins,
          driver,
          constructor
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  getDriverSeasonResults = async (driverId) => {
    try {
      const driverSeasonResults = await this.api.getDriverSeasonResults(
        driverId
      );
      return driverSeasonResults;
    } catch (error) {
      console.error(error);
    }
  };
}
