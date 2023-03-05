export function getDurationFromMinutes(time: number) {
  time = time % (24 * 60)
  const hours = Math.floor(time / 60)
  const minutes = time - (hours * 60)
  return `${toTime(hours)}:${toTime(minutes)}`
}

function toTime(time: number): string {
  return `${time > 9 ? time : '0' + time}`
}
