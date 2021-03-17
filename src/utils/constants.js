const API_URL = 'https://private-37dacc-cfcalendar.apiary-mock.com/';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthsFull = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const totalDatesPerMonthView = 42; // 6 rows, 7 days a week...


module.exports = {
  API_URL,
  totalDatesPerMonthView,
  monthsShort,
  monthsFull,
  weekdays
};