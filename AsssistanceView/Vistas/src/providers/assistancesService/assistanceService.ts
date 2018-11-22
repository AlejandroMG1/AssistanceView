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
  addAllAssistanceReport(idGroup: number, athletes: Athlete[],   date :string){
    for(let athlete of athletes){
      this.addAssistanceReport(false, date, athlete.id);
    }
  }
  getAllAsistaceReport(){
    return this.assistanceList;
  }

}
