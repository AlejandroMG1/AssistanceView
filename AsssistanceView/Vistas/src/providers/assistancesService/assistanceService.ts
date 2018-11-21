import {Assistance} from "../../data/assistance";

export class AssistanceProvider {
  assistanceList: Assistance[] = [];
  addAssistanceReport(assisted: boolean, date: string, idAthlete: number){
    this.assistanceList.push(new Assistance(this.assistanceList.length,assisted, date, idAthlete))
  }
  getAssistanceReport(idReport){
    let index = this.assistanceList.findIndex(data => {
      return data.id == idReport;
    });
    return index;
  }
}
