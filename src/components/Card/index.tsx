import React from "react";
import BusSchedule from "../BusSchedule";
import styles from "./Card.module.css";

import { Stops } from "../../types/index";

interface CardProps {
  /** Name of the stop */
  stopName: string;
  /** Bus stop code  */
  stopNumber: string;
  /** List of  all busses that will arrives to this Bus stop */
  nextBuses: Stops[];
}

const Card: React.FC<CardProps> = ({ nextBuses, stopNumber, stopName }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardHeader}>
        {stopName} <span className={styles.stopNumber}>( {stopNumber} )</span>
      </h1>
      <div className={styles.cardSubHeader}>
        <p>Line</p>
        <p>Heading to</p>
        <p>Arrives at </p>
      </div>
      <BusSchedule nextBuses={nextBuses} />
    </div>
  );
};

export default Card;
