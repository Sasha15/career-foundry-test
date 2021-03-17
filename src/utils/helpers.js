import moment from 'moment';
import { totalDatesPerMonthView } from '../utils/constants'

export const getSpecificDate = (month, dayOfMonth, year) => {
  return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();
};

export const getDayOfMonth = (date) => moment(date).date();

export const getMonth = (date) => moment(date).month();

export const getYear = (date) => moment(date).year();

export const getToday = () => moment().toDate();

export const getReadableWeekday = (date) => moment(date).format('dddd');

export const getReadableMonthDate = (date) => moment(date).format('MMMM Do');

export const getMonthDayYear = (date) => moment(date).format('MM-DD-YYYY');

export const getPrevMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: 12,
      year: year - 1,
    };
  } else {
    return {
      month: month - 1,
      year,
    };
  }
};

export const getNextMonthYear = (month, year) => {
  if (month === 12) {
    return {
      month: 1,
      year: year + 1,
    };
  } else {
    return {
      month: month + 1,
      year,
    };
  }
};

export const getDatesInMonthDisplay = (month, year) => {
  const daysInMonth = moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
  const firstWeekday = moment(`${month}-${year}`, 'MM-YYYY')
  .startOf('month')
  .weekday();
  
  const result = [];

  // Based on index number of firstWeekday, add number of previous month's overflow dates
  const prevMonthYear = getPrevMonthYear(month, year);
  const prevDaysInMonth = moment(
    `${prevMonthYear.month}-${prevMonthYear.year}`,
    'MM-YYYY'
    ).daysInMonth();
    for (let i = firstWeekday - 1; i >= 0; i--) {
      result.push({
        currentMonth: false,
        date: getSpecificDate(
          prevMonthYear.month,
          prevDaysInMonth - i,
          prevMonthYear.year
          ),
        });
      }
      
      
  // Add all current month dates
  for (let j = 1; j <= daysInMonth; j++) {
    result.push({
      currentMonth: true,
      date: getSpecificDate(month, j, year),
    });
  }

  // Overflow dates for next month to meet totalDatesPerMonthView requirement
  if (result.length < totalDatesPerMonthView) {
    const daysToAdd = totalDatesPerMonthView - result.length;
    const nextMonthYear = getNextMonthYear(month, year);
    for (let k = 1; k <= daysToAdd; k++) {
      result.push({
        currentMonth: false,
        date: getSpecificDate(nextMonthYear.month, k, nextMonthYear.year),
      });
    }
  }

  return result;
};

export const getMonthSet = (selectDate) => {
  const month = getMonth(selectDate) + 1;
  const result = {
    current: selectDate,
    prev: getSpecificDate(month - 1, 1, getYear(selectDate)),
    next: getSpecificDate(month + 1, 1, getYear(selectDate)),
  };

  if (month === 1) {
    result.prev = getSpecificDate(12, 1, getYear(selectDate) - 1);
  }

  if (month === 12) {
    result.next = getSpecificDate(1, 1, getYear(selectDate) + 1);
  }

  return result;
};

export const presetDateTracker = (dates) => {
  const result = {};

  if (dates && Array.isArray(dates)) {
    dates.forEach((date) => {
      const dateStr = getMonthDayYear(date);

      if (!result[dateStr]) {
        result[dateStr] = 1;
      } else {
        result[dateStr] += 1;
      }
    });
  }

  return result;
};