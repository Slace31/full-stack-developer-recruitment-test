import {Calendar} from "@full-stack-developer-recruitment-test/calendar";
import {useEffect, useState} from "react";
import {format} from "date-fns"
import styles from '../../app.module.scss'

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date('2021-04-10'))
  const [availableTimeSlots, setAvailableTimeSlots] = useState([])

  useEffect(()=>{
    fetch('assets/calendar.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(jsonData) {
        setAvailableTimeSlots((jsonData[format(selectedDate, 'yyyy-MM-dd')] || []).map((e: { slotStartTime: number }) => e.slotStartTime))
      });
  },[selectedDate])

  return (
    <div className={styles['page']}>
      <Calendar selectedDate={selectedDate} dateRange={9} availableTimeSlots={availableTimeSlots} onSelectedDateChange={setSelectedDate} />
    </div>
  )
}

export default Home;
