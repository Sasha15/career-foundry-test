import React, { useState } from 'react';
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
  getYear,
  getDatesInMonthDisplay,
} from '../../../utils/helpers';
import Modal from '../../Modal/Modal';
import ModalInnerContent from '../../Modal/ModalInnerContent';


const DateIndicator = ({ activeDates, selectDate, setSelectDate, calendarData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleClick = (e) => {
      setSelectDate(e.target.getAttribute('data-date'));
      setModalOpen(true);
    };
  
    const datesInMonth = getDatesInMonthDisplay(
      getMonth(selectDate) + 1,
      getYear(selectDate)
    );

    const monthDates = datesInMonth.map((i, key) => {
      const selected = getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? 'selected' : '';
      const active = activeDates && activeDates[getMonthDayYear(i.date)] ? 'active' : '';
  
      return (
          <div
            className={`date-icon ${selected} ${active}`}
            data-active-month={i.currentMonth}
            data-date={i.date.toString()}
            key={key}
            onClick={handleClick}
          >
            {getDayOfMonth(i.date)}
          </div>
      );
    });
    const {calendar, mentor} = calendarData;
    return (
      <>
        <div className="bae-date-indicator">{monthDates}</div>;
        {
          modalOpen 
          && 
          <Modal id="modal-root">
            <div className="date-popup">
              <div className="close-popup" onClick={() => setModalOpen(false)}></div>
              <div className="date-content">
                <ModalInnerContent dates={calendar} mentor={mentor} selectDate={selectDate}/>
              </div>
            </div>
          </Modal>
        }
      </>
    )
  };
  
  export default DateIndicator;