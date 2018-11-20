import {Schedule} from "./schedule";
import {Athlete} from "./athlete";

export class Group {
  id: number;
  name: string;
  schedules: Schedule[];
  athletes:Athlete[];
}
