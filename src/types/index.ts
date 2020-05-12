export interface Route {
  shortName: string;
}
export interface Bus {
  scheduledArrival: number;
  headsign: string;
  trip: { route: Route };
}

export interface Stop {
  id: string;
  name: string;
  code: string;
  stoptimesWithoutPatterns: Bus[];
}

export interface Data {
  stops: Stop[];
}
