import {IOpeningTime} from "./IOpeningTime";
import {ITerrain} from "./ITerrain";

export interface ILocation {
  openingTime: IOpeningTime
  terrains: Array<ITerrain>
  sessionDuration: string
}
