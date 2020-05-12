import React from "react";
import { gql, useQuery } from "@apollo/client";

import { Data } from "./types/index";
import Card from "./components/Card/Card";
import styles from "./App.module.css";

const App: React.FC = () => {
  const result = useQuery<Data | any>(query);

  if (result.loading) {
    return <div>Loading .....</div>;
  }
  console.log("result...", result.data);
  const nextBuses = result.data.stops[0].stoptimesWithoutPatterns;
  const stopName = result.data.stops[0].name;
  const stopNumber = result.data.stops[0].code;
  return (
    <div className={styles.container}>
      <Card stopName={stopName} stopNumber={stopNumber} nextBuses={nextBuses} />
    </div>
  );
};

export default App;

const query = gql`
  query {
    stops(name: "V6104") {
      id
      name
      code
      stoptimesWithoutPatterns {
        scheduledArrival
        headsign
      }
    }
  }
`;
