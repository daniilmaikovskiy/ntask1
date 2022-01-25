const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const moment = require('moment');

const args = yargs(hideBin(process.argv)).argv;

if (args._.includes('current')) {
  const isYear = args.year || args.y;
  const isMonth = args.month || args.m;
  const isDate = args.date || args.d;

  const date = new Date();

  if (isYear) {
    console.log(date.getFullYear());
  }
  else if (isMonth) {
    console.log(date.getMonth() + 1);
  }
  else if (isDate) {
    console.log(date.getDate());
  }
  else {
    console.log(date);
  }
}
else if (args._.includes('add')) {
  const year = args.year || args.y;
  const month = args.month || args.m;
  const date = args.date || args.d;

  const momentDate = moment();

  if (year) {
    momentDate.add(year, 'years');
  }

  if (month) {
    momentDate.add(month, 'months');
  }

  if (date) {
    momentDate.add(date, 'days');
  }

  console.log(momentDate.format());
}
else if (args._.includes('sub')) {
  const year = args.year || args.y;
  const month = args.month || args.m;
  const date = args.date || args.d;

  const momentDate = moment();

  if (year) {
    momentDate.subtract(year, 'years');
  }

  if (month) {
    momentDate.subtract(month, 'months');
  }

  if (date) {
    momentDate.subtract(date, 'days');
  }

  console.log(momentDate.format());
}