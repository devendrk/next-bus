import React from "react";

import { convertTimeFormat } from "../../utils/index";
import styles from "./BusSchedule.module.css";
interface Props {
  nextBuses?: [] | any;
}

const BusSchedule: React.FC<Props> = ({ nextBuses }) => {
  console.log("nb", nextBuses);
  return (
    <div>
      {nextBuses.map((nb: any) => (
        <div
          className={styles.cardBody}
          key={nb.headsign.length * nb.scheduledArrival}
        >
          <p>{nb.headsign}</p>
          <p>{convertTimeFormat(nb.scheduledArrival)}</p>
        </div>
      ))}
    </div>
  );
};

export default BusSchedule;
