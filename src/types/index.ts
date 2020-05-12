export interface Route {
  id: string;
  shortName: string;
}

export interface stoptimesWithoutPatterns {
  scheduledArrival: number;
  headsign: string;
  trip: {
    route: Route;
  };
}

export interface stops {
  id: string;
  name: string;
  code: string;
  stoptimesWithoutPatterns: stoptimesWithoutPatterns[];
}

export interface Data {
  stops: stops[];
}
