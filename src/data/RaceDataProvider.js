import { Race, Circuit, Location } from "../models/Race";

export default class RaceDataProvider {
  constructor(api) {
    this.api = api;
    this.season = "current";
    this.races = [];
    console.log("RaceDataProvider Created 👌");
  }

  loadRaces = async (season) => {
    if (season) {
      this.season = season;
    }

    let response = await this.api.getRaces(season);

    const _races = response.map((race) => {
      let circuitImagePath = "";
      switch (race.Circuit.circuitId) {
        case "ricard":
        case "silverstone":
        case "zandvoort":
          circuitImagePath = `imgs/circuits/${race.Circuit.circuitId}.png`;
          break;
        default:
          circuitImagePath = `imgs/circuits/${race.Circuit.circuitId}.svg`;
      }
      let thisRace = new Race(race.season, race.round, race.raceName);
      thisRace.date = race.date;
      thisRace.time = race.time;
      thisRace.Circuit = new Circuit(
        race.Circuit.circuitId,
        race.Circuit.circuitName,
        race.Circuit.url,
        new Location(
          race.Circuit.Location.lat,
          race.Circuit.Location.long,
          race.Circuit.Location.locality,
          race.Circuit.Location.country
        )
      );
      thisRace.Circuit.circuitImagePath = circuitImagePath;
      return thisRace;
    });
    console.log("_race", _races);
    this.races = _races;
  };

  getRaceResult = async (round) => {
    const raceResult = await this.api.getRaceResults(round);
    return raceResult;
  };

  getQualifyingResults = async (round) => {
    const qualiResult = await this.api.getQualifyingResults(round);
    return qualiResult;
  };
}
