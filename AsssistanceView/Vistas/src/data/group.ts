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
  deleteAthlete(id: number){
    let idx = this.athletes.findIndex(athlete => {
      return athlete.id == id;
    });
      this.athletes.splice(idx, 1);
  }
}

