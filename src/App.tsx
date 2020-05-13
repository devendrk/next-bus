import React from "react";
import { useQuery } from "@apollo/client";

import Card from "./components/Card";
import LeafLetMap from "./components/LeafletMap/LeafletMap";
import styles from "./App.module.css";

import { FIND_NEXT_LINE } from "./queries";
import { Data } from "./types/index";

const App: React.FC = () => {
  const { loading, error, data } = useQuery<Data | any>(FIND_NEXT_LINE, {
    pollInterval: 30000, // Refetch the data every 30 seconds
  });

  if (loading) {
    return <h1 className={styles.loading}>Loading .....</h1>;
  }
  if (error)
    return <h1 className={styles.error}>OOP some thing went wrong !</h1>;

  const stopDetail = data.stops[0];
  return (
    <div className={styles.container}>
      <LeafLetMap />
      <Card
        stopName={stopDetail.name}
        stopNumber={stopDetail.code}
        nextBuses={stopDetail.stoptimesWithoutPatterns}
      />
    </div>
  );
};

export default App;
