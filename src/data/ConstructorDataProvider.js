import { ConstructorStandings, Constructor } from "../models/Constructor";
import { Driver } from "../models/Driver";

/*
export default class ConstructorDataProvider {
  constructor(api) {
    this.api = api;
    this.season = "";
    this.constructorStandings = [];
    console.log(this.api);
  }

  loadConstructorsWithDrivers = async (season) => {
    this.season = season;
    let response = await this.api.getConstructors(season);
    this.constructorStandings = await Promise.all(
      response.map(async (result) => {
        const { position, points, wins } = result;
        const { constructorId, name, nationality, url } = result.Constructor;
        let standing = new ConstructorStandings(position, points, wins);
        let constructor = new Constructor(constructorId, name, nationality);
        constructor.url = url;
        const drivers = await this.#loadDrivers(constructorId);
        constructor.PopulateDrivers(drivers);
        standing.Constructor = constructor;
        return standing;
      })
    );
  };

  //private method
  #loadDrivers = async (constructorId) => {
    let response = await this.api.getConstructorDrivers(
      this.season,
      constructorId
    );
    return response.map((d) => {
      let driver = new Driver(
        d.driverId,
        d.permanentNumber,
        d.code,
        d.givenName,
        d.familyName
      );
      driver.url = d.url;
      driver.nationality = d.nationality;
      driver.dateOfBirth = d.dateOfBirth;
      return driver;
    });
  };
}
*/

const ConstructorDataProvider = (function () {
  console.log("ConstructorDataProvider created.");
  let api = null;
  let season = "";
  let constructorStandings = null;

  const setApi = (_api) => {
    api = _api;
  };

  const loadDrivers = async (constructorId) => {
    let response = await api.getConstructorDrivers(season, constructorId);
    return response.map((d) => {
      let driver = new Driver(
        d.driverId,
        d.permanentNumber,
        d.code,
        d.givenName,
        d.familyName
      );
      driver.url = d.url;
      driver.nationality = d.nationality;
      driver.dateOfBirth = d.dateOfBirth;
      return driver;
    });
  };

  const loadConstructorsWithDrivers = async (_season) => {
    season = _season;
    let response = await api.getConstructors(season);
    constructorStandings = await Promise.all(
      response.map(async (result) => {
        const { position, points, wins } = result;
        const { constructorId, name, nationality, url } = result.Constructor;
        let standing = new ConstructorStandings(position, points, wins);
        let constructor = new Constructor(constructorId, name, nationality);
        constructor.url = url;
        const drivers = await loadDrivers(constructorId);
        constructor.PopulateDrivers(drivers);
        standing.Constructor = constructor;
        return standing;
      })
    );
    console.log(constructorStandings);
    return constructorStandings;
  };

  return {
    setApi,
    loadConstructorsWithDrivers,
  };
})();

export default ConstructorDataProvider;
