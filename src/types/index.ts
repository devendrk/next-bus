export interface Route {
  id: string;
  shortName: string;
}

export interface StoptimesWithoutPatterns {
  scheduledArrival: number;
  headsign: string;
  trip: {
    route: Route;
  };
}

export interface Stops {
  id: string;
  name: string;
  code: string;
  stoptimesWithoutPatterns: StoptimesWithoutPatterns[];
}

export interface Data {
  stops: Stops[];
}
