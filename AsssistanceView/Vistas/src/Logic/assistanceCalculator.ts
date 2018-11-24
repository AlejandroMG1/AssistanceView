import {Assistance} from "../data/assistance";
import {AssistanceDateManagement} from "./assistanceDatesManagement/assistanceDateManagement";

export class AssistanceCalculator {
  constructor(){
  }
  calculateAssistancePercentageByAthleteId(assistanceListById: Assistance[]){
    if(assistanceListById.length == 0){
      return 100;
    }
    let assistanceDateManager = new AssistanceDateManagement(assistanceListById);
    let year: string = new Date().getFullYear().toString();
    let month: string  = new Date().getMonth().toString();

    console.log(year);
    let filteredTotalAssistance = assistanceListById.filter(assistance => {

      return assistance.date.substring(3,5) === month && assistance.date.substring(7,11);
    });
    let lenghtAssistances = filteredTotalAssistance.length;
    let filteredAssistedDays = filteredTotalAssistance.filter(assistance => assistance.assisted === false);
    let lenghtAssistedDays = filteredAssistedDays.length;

    return lenghtAssistedDays/lenghtAssistances*100;
  }
}
