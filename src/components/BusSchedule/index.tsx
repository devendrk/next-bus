import React from "react";

import { convertTimeFormat } from "../../utils/index";
import styles from "./BusSchedule.module.css";

interface Props {
  nextBuses: any;
}

const BusSchedule: React.FC<Props> = ({ nextBuses }) => {
  console.log("nnnnnnnnnnn", nextBuses);
  return (
    <div>
      {nextBuses.map((nb: any) => (
        <div className={styles.cardBody} key={nb.trip.route.id}>
          <p>{nb.trip.route.shortName}</p>
          <p className="short-name">{nb.headsign}</p>
          <p>{convertTimeFormat(nb.scheduledArrival)}</p>
        </div>
      ))}
    </div>
  );
};

export default BusSchedule;
