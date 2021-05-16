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
