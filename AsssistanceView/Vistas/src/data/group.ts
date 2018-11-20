import {Schedule} from "./schedule";
import {Athlete} from "./athlete";

export class Group {
  id: number;
  name: string;
  schedules: Schedule[];
  athletes: Athlete[];
  constructor(id: number){
    this.id = id;
    this.athletes = [];
    this.schedules = [];
  }
  
}

