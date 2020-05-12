export interface Bus {
  scheduledArrival: number;
  headsign: string;
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
