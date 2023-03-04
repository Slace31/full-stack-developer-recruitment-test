import styles from './datepicker.module.scss';
import { addDays, subDays } from 'date-fns'
import DateList from "../datelist/datelist";
import React from "react";
import ArrowIcon from '../assets/arrow-icon.svg'

export function DatePicker(props: { selectedDate: Date, dateRange: number, onSelectedDateChange: React.Dispatch<React.SetStateAction<Date>> }) {
  const dates = [props.selectedDate]
  for (let i = 1; i < props.dateRange; i++) {
    dates.push(addDays(props.selectedDate, i))
  }

  return (
    <div className={styles['container']}>
      <button onClick={() => props.onSelectedDateChange(subDays(props.selectedDate, 1))} className={styles['iconButton']} style={{left: -60, transform: 'translateY(-50%)'}}>
        <img src={ArrowIcon} alt={"Arrow pointing left"} />
      </button>
      <DateList dates={dates} onSelectedDateChange={props.onSelectedDateChange} />
      <button onClick={() => props.onSelectedDateChange(addDays(props.selectedDate, 1))} className={styles['iconButton']} style={{transform: 'rotate(180deg) translateY(50%)', right: -60}}>
        <img src={ArrowIcon} alt={"Arrow pointing right"} />
      </button>
    </div>
  );
}

export default DatePicker;
