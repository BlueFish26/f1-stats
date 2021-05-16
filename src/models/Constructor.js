export class ConstructorStandings {
  constructor() {
    this.position = '';
    this.positionText = '';
    this.points = 0;
    this.wins = 0;
    this.Constructor = new Constructor();
  }
}

export class Constructor {
  constructor(constructorId = '', name = '', nationality = '') {
    this.constructorId = constructorId;
    this.url = '';
    this.name = name;
    this.nationality = nationality;
    this.drivers = [];
  }

  PopulateDrivers = (drivers) => {
    this.drivers = drivers;
  };
}
