import React from 'react';
import moment from 'moment';
import {
    getReadableMonthDate,
    getReadableWeekday,
    getYear,
  } from '../../../utils/helpers';

const CalendarHeader = ({ selectDate }) => {
  return (
    <div className="bae-calendar-header">
      <div className="left-container">
        <h1>{getReadableWeekday(selectDate)}</h1>
        <h1>{getReadableMonthDate(selectDate)}</h1>
      </div>
      <div className="right-container">
        <h3>{getYear(selectDate)}</h3>
      </div>
    </div>
  );
};
export default CalendarHeader;