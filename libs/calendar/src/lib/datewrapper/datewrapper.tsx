import { format } from 'date-fns'
import React from "react";
import styles from './datewrapper.module.scss'

function DateWrapper(props: { date: Date, isSelected: boolean, onSelectedDateChange: React.Dispatch<React.SetStateAction<Date>> }) {
  return (
    <button onClick={() => props.onSelectedDateChange(props.date)} className={`${styles['container']}${props.isSelected ? ' ' + styles['isSelected'] : ''}`}>
      <div className={styles['day']}>{format(props.date, 'EEE')}</div>
      <div className={styles['date']}>{format(props.date, 'd')}</div>
      <div className={styles['month']}>{format(props.date, 'MMMM')}</div>
      <div className={styles['year']}>{format(props.date, 'yyyy')}</div>
    </button>
  );
}

export default DateWrapper;
