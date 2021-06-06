import { Driver } from "../models/Driver";

export default class DriverDataProvider {
  constructor(api) {
    this.api = api;
    this.drivers = [];
    console.log("DriverDataProvider Created 👌");
  }

  getDrivers = async () => {
    try {
      const drivers = await this.api.getDrivers();
      return drivers.map((d) => {
        let driver = new Driver(
          d.driverId,
          d.permanentNumber,
          d.code,
          d.givenName,
          d.familyName
        );
        driver.url = d.url;
        driver.dateOfBirth = d.dateOfBirth;
        driver.nationality = d.nationality;
        return driver;
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
