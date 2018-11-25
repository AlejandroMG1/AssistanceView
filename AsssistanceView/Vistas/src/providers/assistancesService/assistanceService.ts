import { Assistance } from "../../data/assistance";
import { Athlete } from "../../data/athlete";
import { Storage } from "@ionic/storage";
import assistanceDummy from "../../data/dummy/assistanceDummy";
import { NativeStorage } from '@ionic-native/native-storage';
import {Injectable} from "@angular/core";
import {Schedule} from "../../data/schedule";
@Injectable()
export class AssistanceProvider {
  assistanceList: Assistance[] = [];
  constructor(private storage: Storage){
    this.getDBSchedules();

  }
  getDBSchedules(){
    this.storage.get("assistancer")
      .then(data => {
        if(data==null){
          this.assistanceList = [];
        }else{
          this.assistanceList = JSON.parse(data);
          console.log("Entro");
          console.log(JSON.parse(data));
        }
      });
  }
  addAssistanceReport(assisted: boolean, date: string, idAthlete: number, idGroup: number) {
    let assistance = new Assistance(this.assistanceList.length + 1, assisted, date, idAthlete, idGroup);
    this.assistanceList.push(assistance);
  }
  getAssistanceReport(idReport) {
    let index = this.assistanceList.findIndex(data => {
      return data.id == idReport;
    });
    return index;
  }
  setAssistedInReport(idReport: number, assisted: boolean) {
    this.assistanceList[idReport].assisted = assisted;
  }
  addAllAssistanceReport(idGroup: number, athletes: Athlete[], date: string) {
    for (let athlete of athletes) {
      this.addAssistanceReport(false, date, athlete.id, idGroup);
    }
    this.updateAssistance();
  }
  getAllAsistaceReport() {
    return this.assistanceList;
  }
  getReportsByAthleteId(id: number) {
    return this.assistanceList.filter(assistance => assistance.idAthlete === id);
  }
  getIdReportByScheduleIdAthleteId(date: string, idAthlete: number): number {
    return this.assistanceList.findIndex(assistance => assistance.idAthlete === idAthlete && assistance.date === date);
  }
  getIdReportByScheduleId(date: string, idGroup: number): Assistance[] {
    let assistances: Assistance[] = [];
    for (let assistance of this.assistanceList) {
      if (assistance.date == date && assistance.idGroup == idGroup) {
        assistances.push(assistance);
      }
    }

    return assistances;
  }
  getAssistancesReportByIdGroup(id: number): Assistance[]{
    let assistances: Assistance[] = [];
    return this.assistanceList.filter(assistance => {
      return assistance.idGroup === id;
    });
  }
  updateAssistance(){
    this.storage.set("assistancer", JSON.stringify(this.assistanceList));
  }
  addAssistanceReportByGroupScheduleandAthleteId(idAthlete: number, schedules : Schedule[], idGroup: number){
    console.log("==========");
    console.log(schedules);
    for(let schedule of schedules){
      this.addAssistanceReport(false, schedule.date, idAthlete, idGroup);
    }
    console.log(this.assistanceList);
  }

}
