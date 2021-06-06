export class DriverStandings {
  constructor(position, points, wins, driver, constructor) {
    this.position = position;
    this.positionText = position;
    this.points = points;
    this.wins = wins;
    this.Driver = driver;
    this.Constructor = constructor;
  }
}

export class Driver {
  constructor(
    driverId = '',
    permanentNumber = 0,
    code = '',
    givenName = '',
    familyName = ''
  ) {
    this.driverId = driverId;
    this.permanentNumber = permanentNumber;
    this.code = code;
    this.url = '';
    this.givenName = givenName;
    this.familyName = familyName;
    this.dateOfBirth = '';
    this.nationality = '';
  }
  get FullName() {
    return `${this.givenName} ${this.familyName}`;
  }
}
