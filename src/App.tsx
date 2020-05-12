import React from "react";
import { useQuery } from "@apollo/client";

import Card from "./components/Card";
import styles from "./App.module.css";

import { FIND_NEXT_LINE } from "./queries";
import { Data } from "./types/index";

const App: React.FC = () => {
  const { loading, data } = useQuery<Data | any>(FIND_NEXT_LINE, {
    pollInterval: 30000, // Refetch the data every 30 seconds
  });

  if (loading) {
    return <div>Loading .....</div>;
  }
  console.log("result...", data);
  const nextBuses = data.stops[0].stoptimesWithoutPatterns;
  const stopName = data.stops[0].name;
  const stopNumber = data.stops[0].code;
  return (
    <div className={styles.container}>
      <Card stopName={stopName} stopNumber={stopNumber} nextBuses={nextBuses} />
      <h1>abcjd</h1>
    </div>
  );
};

export default App;
