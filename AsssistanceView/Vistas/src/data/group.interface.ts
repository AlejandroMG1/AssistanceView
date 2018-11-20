import {Schedule} from "./schedule.interface";
import {Athlete} from "./athlete.interface";

export interface Group {
  id: number,
  name: string,
  schedules: Schedule[],
  athletes:Athlete[]
}
