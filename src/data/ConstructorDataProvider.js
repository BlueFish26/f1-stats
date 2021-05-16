export class ConstructorDataProvider {
  constructor(api) {
    this.api = api;
  }

  GetConstructors = async (season) => {
    return await this.api.getConstructors(season);
  };
}
