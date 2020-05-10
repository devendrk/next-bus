/**
 * @param {number} arrivalTime  time in seconds from last 00:00 ( 12:00 am)
 * @returns {string}
 */
export const convertTimeFormat = (arrivalTime: number): string => {
  var date = new Date(0);
  date.setSeconds(arrivalTime);
  var timeString = date.toISOString().substr(11, 5);
  return timeString;
};
