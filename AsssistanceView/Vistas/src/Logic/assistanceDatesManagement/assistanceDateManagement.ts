import {Assistance} from "../../data/assistance";

export class AssistanceDateManagement{
  AssistanceList: Assistance [];
  constructor(assistanceList: Assistance[]) {
    this.AssistanceList = assistanceList;
  }
  getActualYear():string{
    let year: number = 0;
    for(let assistance of this.AssistanceList){
      let assistanceDate = new Date(assistance.date);
      if(assistanceDate.getFullYear()>year){
        year = assistanceDate.getFullYear();
      }
    }
    return year.toString();
  }
  getActualMonth(year: string): string{
    let month = 0;
    for(let assistance of this.AssistanceList){
      let assistanceDate = new Date(assistance.date);
      if(assistanceDate.getFullYear().toString() == year){
        if(assistanceDate.getMonth() > month){
          month = assistanceDate.getMonth();
        }
      }
    }
    return month.toString();
  }
}
