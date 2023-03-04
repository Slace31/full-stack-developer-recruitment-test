import styles from './calendar.module.scss';
import DatePicker from "./datepicker/datepicker";
import TimeSlots from "./timeslots/timeslots";
import React from "react";

export interface CalendarProps {
  selectedDate: Date
  dateRange: number
  availableTimeSlots: Array<string>
  onSelectedDateChange: React.Dispatch<React.SetStateAction<Date>>
}

export function Calendar(props: CalendarProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['titleWrapper']}>
        <h2>Calendar</h2>
        <div className={styles['spacer']} />
        <button className={styles['underlinedButton']}>Clear my selection(s)</button>
      </div>
      <DatePicker selectedDate={props.selectedDate} dateRange={props.dateRange} onSelectedDateChange={props.onSelectedDateChange} />
      <div className={styles['titleWrapper']}>
        <h2>Available Time Slots</h2>
      </div>
      <TimeSlots timeSlots={props.availableTimeSlots} />
      <div className={styles['titleWrapper']}>
        <div className={styles['spacer']} />
        <button className={styles['underlinedButton']}>Show all time slots</button>
      </div>
    </div>
  );
}

export default Calendar;
