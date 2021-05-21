export default class RaceDataProvider {
  constructor(api) {
    this.api = api;
    this.season = "current";
    this.races = [];
  }

  loadRaces = async (season) => {
    if (season) {
      this.season = season;
    }

    let response = await this.api.getRaces(season);

    const races = response.data.MRData.RaceTable.Races.map((race) => {
      let circuitPath = "";
      switch (race.Circuit.circuitId) {
        case "ricard":
        case "silverstone":
        case "zandvoort":
          circuitPath = `imgs/circuits/${race.Circuit.circuitId}.png`;
          break;
        default:
          circuitPath = `imgs/circuits/${race.Circuit.circuitId}.svg`;
      }
      return new Race();
    });

    this.races = races;
  };
}
