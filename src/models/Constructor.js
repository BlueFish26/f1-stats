export class ConstructorStandings {
  constructor(position = "", points = 0, wins = 0) {
    this.position = position;
    this.positionText = position;
    this.points = points;
    this.wins = wins;
    this.Constructor = new Constructor();
  }
}

export class Constructor {
  constructor(constructorId = "", name = "", nationality = "") {
    this.constructorId = constructorId;
    this.url = "";
    this.name = name;
    this.nationality = nationality;
    this.drivers = [];
  }

  PopulateDrivers = (drivers) => {
    this.drivers = drivers;
  };
}
