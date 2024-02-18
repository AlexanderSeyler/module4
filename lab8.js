var moment = require("moment");

const birthdate = moment("1994-11-24");

const currentDate = moment();

const daysDifference = currentDate.diff(birthdate, "days");
console.log(
  "Number of days between birthdate and current date:",
  daysDifference
);

const duration = moment.duration(currentDate.diff(birthdate));
const years = duration.years();
const months = duration.months();
const days = duration.days();
console.log(`Years: ${years}, Months: ${months}, Days: ${days}`);

const date1 = moment("2023-11-01");
const date2 = moment("2023-12-01");

const closestDate = moment().isSameOrBefore(date1) ? date1 : date2;
console.log(
  "Closest date to the current date:",
  closestDate.format("YYYY-MM-DD")
);

const isBefore = date1.isBefore(date2);
console.log(`Date 1 is ${isBefore ? "before" : "after"} Date 2.`);

const londonOffset = 0;
const londonTime = moment().utcOffset(londonOffset).format("HH:mm:ss");
console.log("Current time in London:", londonTime);
