import {Schedule} from "../../data/schedule";
import scheduleDummy from "../../data/dummy/scheduleDummy";
import { Observable } from "rxjs/Observable";

export class scheduleProvider {
  private scheduleList: Schedule[];
  constructor(){
    this.scheduleList = scheduleDummy;
  }
  getSchedule(){
    const schedulelist$= Observable.create(this.scheduleList);
    return schedulelist$;
  }
  updateSchedule(){
    let todayDate = new Date();
    let today: string = todayDate.getDate()+"/"+todayDate.getMonth()+"/"+todayDate.getFullYear();
    if(!this.scheduleList.find((data) => data.date == today)){
      let day: Schedule = new Schedule(this.scheduleList.length, today);
      this.scheduleList.push(day);
    }
  }
}
