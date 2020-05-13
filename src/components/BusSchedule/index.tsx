import React from "react";

import { convertTimeFormat } from "../../utils/index";
import styles from "./BusSchedule.module.css";

import { Stops } from "../../types";
interface Props {
  nextBuses: Stops[];
}

const BusSchedule: React.FC<Props> = ({ nextBuses }) => {
  return (
    <div>
      {nextBuses.map((nb: any, index: number) => (
        <div className={styles.cardBody} key={index}>
          <p>{nb.trip.route.shortName}</p>
          <p className="short-name">{nb.headsign}</p>
          <p>{convertTimeFormat(nb.scheduledArrival)}</p>
        </div>
      ))}
    </div>
  );
};

export default BusSchedule;
