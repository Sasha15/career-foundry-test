import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {getMonthDayYear} from '../../utils/helpers';

const ModalInnerContent = ({dates, mentor, selectDate}) => {
    const [filteredDates, setFilteredDates] = useState([]);
    useEffect(() => {
        const tempDates = [...dates].filter(date => moment(getMonthDayYear(selectDate)).isSame(getMonthDayYear(date.date_time)));
        setFilteredDates(tempDates)
    }, [selectDate]);



    const displayHoursRange = () => {
        let result = []
        for(let i = 0; i <= 23; i++) {
            result.push(<div className="hour-item" key={`${i}-${i+1}`} data-hour={`${i}-${i+1}`}>{`${i} - ${i+1}`}</div>)
        }
        return result;
    }
    return (
        <>
            <div className="mentor-name"><h2>Reserve time with {mentor.name} <br /> on {getMonthDayYear(selectDate)} </h2></div>
            {displayHoursRange().map(item => item)}
        </>
    )
}

export default ModalInnerContent;