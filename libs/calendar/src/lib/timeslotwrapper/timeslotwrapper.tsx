import styles from './timeslotwrapper.module.scss'

function TimeSlotWrapper(props: { timeSlot: string }) {
  return (
    <div className={styles['container']}>
      <div className={styles['text']}>{props.timeSlot}</div>
    </div>
  );
}

export default TimeSlotWrapper;
