import TimeSlotWrapper from "../timeslotwrapper/timeslotwrapper";
import styles from './timeslots.module.scss'

function TimeSlots(props: { timeSlots: Array<string> }) {
  return (
    <div className={styles['container']}>
      {props.timeSlots.map(timeSlot => (
        <TimeSlotWrapper timeSlot={timeSlot} key={timeSlot} />
      ))}
    </div>
  );
}

export default TimeSlots;
