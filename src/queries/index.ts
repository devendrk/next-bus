import { gql } from "@apollo/client";

export const FIND_NEXT_LINE = gql`
  query {
    stops(name: "V6104") {
      id
      name
      code
      stoptimesWithoutPatterns {
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

export const GET_DETAILS = gql`
  query getDetails($nameToSearch: String!) {
    stops(name: $nameToSearch) {
      id
      name
      code
      stoptimesWithoutPatterns {
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
