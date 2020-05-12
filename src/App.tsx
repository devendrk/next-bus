import React from "react";
import { useQuery } from "@apollo/client";

import { Data } from "./types/index";
import Card from "./components/Card";
import styles from "./App.module.css";

import { FIND_NEXT_LINE } from "./queries";

const App: React.FC = () => {
  const result = useQuery<Data | any>(FIND_NEXT_LINE, {
    pollInterval: 30000, // Refetch the data every 30 seconds
  });

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
