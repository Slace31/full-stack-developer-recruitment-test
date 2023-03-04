import DateWrapper from "../datewrapper/datewrapper";
import React from "react";
import styles from "./datelist.module.scss"

function DateList(props: { dates: Date[], onSelectedDateChange: React.Dispatch<React.SetStateAction<Date>> }) {
  return (
    <div className={styles['container']}>
      {props.dates.map((date, index) => (
        <DateWrapper date={date} isSelected={index === 0} key={date.getDate()} onSelectedDateChange={props.onSelectedDateChange} />
      ))}
    </div>
  );
}

export default DateList;
