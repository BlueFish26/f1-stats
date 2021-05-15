export const ConstructorStandings = {
  position: '',
  positionText: '',
  points: 0,
  wins: 0,
  Constructor: {},
};

export const Constructor = {
  constructorId: '',
  url: '',
  name: '',
  nationality: '',
  drivers: [],
  populateDrivers: (drivers) => {
    this.drivers = drivers;
  },
};
