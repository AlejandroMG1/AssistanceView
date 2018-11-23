import {Assistance} from "../../data/assistance";
import {Athlete} from "../../data/athlete";

export class AssistanceProvider {
  assistanceList: Assistance[] = [];
  addAssistanceReport(assisted: boolean, date: string, idAthlete: number){
    let assistance = new Assistance(this.assistanceList.length+1,assisted, date, idAthlete);
    this.assistanceList.push(assistance);
  }
  getAssistanceReport(idReport){
    let index = this.assistanceList.findIndex(data => {
      return data.id == idReport;
    });
    return index;
  }
  setAssistedInReport(idReport: number, assisted: boolean){
    this.assistanceList[idReport].assisted = assisted;
  }
  addAllAssistanceReport(idGroup: number, athletes: Athlete[],   date :string){
    for(let athlete of athletes){
      this.addAssistanceReport(false, date, athlete.id);
    }
  }
  getAllAsistaceReport(){
    return this.assistanceList;
  }
  getReportsByAthleteId (id: number){
    return this.assistanceList.filter(assistance => assistance.idAthlete === id);
  }
  getIdReportByScheduleIdAthleteId(date: string, idAthlete: number): number{
    return this.assistanceList.findIndex(assistance => assistance.idAthlete === idAthlete && assistance.date === date);
  }

}
