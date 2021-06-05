export class Race {
  constructor(season, round, raceName) {
    this.season = season;
    this.round = round;
    this.raceName = raceName;
    this.Circuit = null;
    this.date = null;
    this.time = "";
    this.url = "";
  }
}

export class Circuit {
  constructor(circuitId, circuitName, url, Location) {
    this.circuitId = circuitId;
    this.circuitName = circuitName;
    this.url = url;
    this.Location = Location;
  }
}

export class Location {
  constructor(lat, long, locality, country) {
    this.lat = lat;
    this.long = long;
    this.locality = locality;
    this.country = country;
  }
}
