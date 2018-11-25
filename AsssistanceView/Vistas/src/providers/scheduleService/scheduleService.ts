import {Schedule} from "../../data/schedule";
import scheduleDummy from "../../data/dummy/scheduleDummy";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import {map, filter, toArray} from "rxjs/operators";
import {Group} from "../../data/group";
import {Athlete} from "../../data/athlete";
import {AssistanceProvider} from "../assistancesService/assistanceService";
import {Injectable} from "@angular/core";
import { Storage } from "@ionic/storage";
@Injectable()
export class scheduleProvider {
  private scheduleList: Schedule[] = [];
  constructor(private storage: Storage){
    this.getDBSchedules();
  }
   getDBSchedules(){
       this.storage.get("schedule")
        .then(data => {
          if(data==null){
            this.scheduleList = [];
          }else{
            this.scheduleList = JSON.parse(data);
            console.log("Entro");
            console.log(JSON.parse(data));
          }
        });
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
        this.updateSchedule();
        return day.id;
      }
      return -1;
  }
  getSchedulesByIdGroup(id: number) {
    this.getDBSchedules();
    return this.getSchedule1().filter(schedule => schedule.idGroup === id);
  }
  updateSchedule(){
    this.storage.set("schedule", JSON.stringify(this.scheduleList));
  }

}
