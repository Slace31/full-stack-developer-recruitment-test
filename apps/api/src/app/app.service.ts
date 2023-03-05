import { Injectable } from '@nestjs/common';
import {ILocation, ITimeSlot} from "../models";
import mockedLocation from '../mocks/location.mock'
import ITimeInterval from "../models/ITimeInterval";
import {getDurationInMinutes} from "../util";
import {getDurationFromMinutes} from "../util/getDurationFromMinutes";

@Injectable()
export class AppService {
  getLocation(): ILocation {
    return mockedLocation;
  }

  getTimeSlots(location: ILocation): ITimeSlot[] {
    const timeSlots: ITimeSlot[] = []

    // For each day of the week
    Object.keys(location.openingTime).forEach(dayOfTheWeek => {
      // We get the time interval array
      const timeIntervals: ITimeInterval[] = location.openingTime[dayOfTheWeek]
      // For each time interval
      timeIntervals.forEach(timeInterval => {
        // We compute each start and end time using session duration
        const computedIntervals: string[] = [timeInterval.from]
        const fromInMinutes: number = getDurationInMinutes(timeInterval.from)
        const toInMinutes: number = getDurationInMinutes(timeInterval.to)
        let diffBetweenTheTwoInMinutes: number = toInMinutes - fromInMinutes;
        if (diffBetweenTheTwoInMinutes < 0) {
          diffBetweenTheTwoInMinutes = (getDurationInMinutes('24:00') - fromInMinutes) + toInMinutes
        }
        for (let i = 0; i < Math.floor(diffBetweenTheTwoInMinutes / getDurationInMinutes(location.sessionDuration)); i++) {
          const lastComputedInterval = computedIntervals[computedIntervals.length - 1]
          computedIntervals.push(getDurationFromMinutes(getDurationInMinutes(lastComputedInterval) + getDurationInMinutes(location.sessionDuration)))
        }

        // For each computed intervals except last one
        for (let i = 0; i < computedIntervals.length - 1; i++) {
          const actualComputedInterval: string = computedIntervals[i]
          const nextComputedInterval: string = computedIntervals[i+1]
          // We add the timeslot into the result array
          timeSlots.push({
            dayOfTheWeek,
            startTime: actualComputedInterval,
            endTime: nextComputedInterval,
            availablePlayers: location.terrains.reduce((prev, current) => current.players + prev, 0)
          })
        }
      })
    })

    return timeSlots
  }
}
