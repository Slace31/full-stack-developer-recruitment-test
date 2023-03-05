export function getDurationInMinutes(duration: string) {
  const durationSplit = duration.split(':')
  return Number(durationSplit[0]) * 60 + Number(durationSplit[1])
}
