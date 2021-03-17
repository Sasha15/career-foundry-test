import React, { useState } from 'react';
import moment from 'moment'
import './calendar.scss';

import CalendarHeader from './components/CalendarHeader';
import WeekdayIndicator from './components/WeekdayIndicator';
import DateIndicator from './components/DateIndicator';
import MonthIndicator from './components/MonthIndicator';


const themes = {
    salmon: 'salmon-theme',
    monochrome: 'monochrome-theme',
    rouge: 'rouge-theme',
};

const Calendar = ({theme, calendarData}) => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader selectDate={selectDate}/>
      <WeekdayIndicator />
      <DateIndicator
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        calendarData={calendarData}
      />
      <MonthIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
    </div>
  );
};
export default Calendar;