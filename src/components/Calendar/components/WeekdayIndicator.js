import React from 'react';
import {weekdays} from '../../../utils/constants'

const WeekdayIndicator = () => {
    const weekdayIcons = weekdays.map((day, key) => {
      return (
        <div className="weekday-indicator-icon" key={key}>
          {day}
        </div>
      );
    });
    return <div className="bae-weekday-indicators">{weekdayIcons}</div>;
};

export default WeekdayIndicator;