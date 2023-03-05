import ITimeInterval from "./ITimeInterval";

export interface IOpeningTime {
  monday?: Array<ITimeInterval>
  tuesday?: Array<ITimeInterval>
  wednesday?: Array<ITimeInterval>
  thursday?: Array<ITimeInterval>
  friday?: Array<ITimeInterval>
  saturday?: Array<ITimeInterval>
  sunday?: Array<ITimeInterval>
}
