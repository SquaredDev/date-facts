const moment = require('moment');
moment().format();
const chalk = require('chalk');

// It is blue(dayWeek, month day year, hh:mm:ss tod) .
// It is magenta(count) day of the year.
// It is cyan(count) seconds into the day.
// It green(is) during Daylight Savings Time.
// It red(is/is not) a leap year.

let now = moment()


console.log(`It is ${chalk.blue(moment().format("LLLL"))}.`);
console.log(`It is ${chalk.magenta(moment().format("DDDo"))} day of the year.`);

let secCount
function seconds() {
  secCount = 0
  secCount += parseInt(moment().format("H")) * 60 * 60
  secCount += parseInt(moment().format("m")) * 60
  secCount += parseInt(moment().format("s"))
  return secCount
}
console.log(`It is ${chalk.cyan(seconds())} seconds into the day.`);






function dst() {
  if (moment().isDST()) {
    console.log(`It ${chalk.green('is')} during Daylight Savings Time.`);
  }
  else {
    console.log(`It ${chalk.red('is not')} during Daylight Savings Time.`);
  }
}
console.log(dst());

function leapyear() {
  if (moment().isLeapYear()) {
    console.log(`It ${chalk.green('is')} a leap year.`);
  }
  else {
    console.log(`It ${chalk.red('is not')} a leap year.`);
  }
}
console.log(leapyear());
