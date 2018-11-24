import {Schedule} from "../../data/schedule";
import scheduleDummy from "../../data/dummy/scheduleDummy";
import 'rxjs/add/observable/from';

export class scheduleProvider {
  private scheduleList: Schedule[] = [];
  constructor(){
     // this.scheduleList = scheduleDummy;
  }
  getScheduleById(id: number){

    return this.scheduleList[id];
  }
  getSchedule1(){
    return this.scheduleList;
  }
  addSchedule(idGroup: number): number{
    let todayDate = new Date();
    let today: string = todayDate.getDate()+"/"+todayDate.getMonth()+"/"+todayDate.getFullYear();
      let day: Schedule = { id: this.scheduleList.length,idGroup , date: today};
      if(!this.scheduleList.find(schedule => schedule.idGroup == idGroup && schedule.date == day.date)){
        this.scheduleList.push(day);
        return day.id;
      }
      return -1;
  }
  getSchedulesByIdGroup(id: number) {
    return this.getSchedule1().filter(schedule => schedule.idGroup === id);
  }
}
