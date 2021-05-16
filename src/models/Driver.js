export class Driver {
  constructor() {
    this.driverId = '';
    this.permanentNumber = 0;
    this.code = '';
    this.url = '';
    this.givenName = '';
    this.familyName = '';
    this.dateOfBirth = '';
    this.nationality = '';
  }
  get FullName() {
    return `${this.givenName} ${this.familyName}`;
  }
}
