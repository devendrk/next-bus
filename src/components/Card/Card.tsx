import React from "react";
import styles from "./Card.module.css";

interface NextBusses {
  scheduledArrival: number;
  headsign: number;
}
interface CardProps {
  /** Name of the stop */
  stopName?: string;
  /** Bus stop code  */
  stopNumber?: string;
  /** List of  all busses that will arrives to this Bus stop */
  nextBuses: NextBusses[];
}

const Card: React.FC<CardProps> = ({ nextBuses, stopNumber, stopName }) => {
  /**
   * @param {number} arrivalTime  time in seconds from last 00:00 ( 12:00 am)
   * @returns {string}
   */
  const getArrivalTime = (arrivalTime: number): string => {
    var date = new Date(0);
    date.setSeconds(arrivalTime);
    var timeString = date.toISOString().substr(11, 5);
    return timeString;
  };
  const renderSchedule = () => {
    return nextBuses.map((nb: any) => (
      <div
        className={styles.cardBody}
        key={nb.headsign.length * nb.scheduledArrival}
      >
        <p>{nb.headsign}</p>
        <p>{getArrivalTime(nb.scheduledArrival)}</p>
      </div>
    ));
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.cardHeader}>
        {stopName} <span className={styles.stopNumber}>( {stopNumber} )</span>
      </h1>
      <div className={styles.cardSubHeader}>
        <p>Heading to</p>
        <p>Arrives at </p>
      </div>
      {renderSchedule()}
    </div>
  );
};

export default Card;
