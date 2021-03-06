import { gql } from "@apollo/client";

export const FIND_NEXT_LINE = gql`
  query {
    stops(name: "V6104") {
      id
      name
      code
      stoptimesWithoutPatterns(numberOfDepartures: 10) {
        scheduledArrival
        headsign
        trip {
          route {
            shortName
            id
          }
        }
      }
    }
  }
`;
