import {Schedule} from "../../data/schedule";
import scheduleDummy from "../../data/dummy/scheduleDummy";

export class scheduleProvider {
  private scheduleList: Schedule[];
  constructor(){
    this.scheduleList = scheduleDummy;
  }
  getSchedule(){
    return this.scheduleList;
  }
}
