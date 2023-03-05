// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jsonData from "../assets/location.json";
import {ILocation} from "../models";

const mockedLocation = {
  openingTime: jsonData.opening_time,
  terrains: jsonData.terrains,
  sessionDuration: jsonData.session_duration
} as ILocation;

export default mockedLocation;
