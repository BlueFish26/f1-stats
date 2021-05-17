export default class ConstructorDataProvider {
  constructor(api) {
    this.api = api;
    this.constructors = [];
    console.log(this.api);
  }

  getConstructors = async (season) => {
    this.constructors = await this.api.getConstructors(season);
    this.constructors.forEach(async (constructor) => {
      const drivers = await this.api.getConstructorDrivers(
        constructor.constructorId
      );
      constructor.PopulateDrivers(drivers);
    });
    return this.constructors;
  };
}
