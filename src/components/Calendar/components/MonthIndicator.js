import React from 'react';
import { getMonth, getMonthSet } from '../../../utils/helpers';
import './month-indicator.scss';

import { monthsFull } from '../../../utils/constants';

const MonthIndicator = ({ selectDate, setSelectDate }) => {
  const changeDate = (e) => {
    setSelectDate(e.target.getAttribute('data-date'));
  };

  const monthSet = getMonthSet(selectDate);

  return (
    <div className="bae-month-indicator">
      <h4 data-date={monthSet.prev} onClick={changeDate}>
        {monthsFull[getMonth(monthSet.prev)]}
      </h4>
      <h3>{monthsFull[getMonth(monthSet.current)]}</h3>
      <h4 data-date={monthSet.next} onClick={changeDate}>
        {monthsFull[getMonth(monthSet.next)]}
      </h4>
    </div>
  );
};

export default MonthIndicator;