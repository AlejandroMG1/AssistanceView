import {Assistance} from "../data/assistance";
import {AssistanceDateManagement} from "./assistanceDatesManagement/assistanceDateManagement";

export class AssistanceCalculator {
  constructor(){
  }
  calculateAssistancePercentageByAthleteId(assistanceListById: Assistance[]){
    let assistanceDateManager = new AssistanceDateManagement(assistanceListById);
    let year = assistanceDateManager.getActualYear();
    let month = assistanceDateManager.getActualMonth(year);
    let filteredTotalAssistance = assistanceListById.filter(assistance => {
      return assistance.date.substring(4,6) === month && assistance.date.substring(7,11);
    });
    let lenghtAssistances = filteredTotalAssistance.length;
    let filteredAssistedDays = filteredTotalAssistance.filter(assistance => assistance.assisted === false);
    let lenghtAssistedDays = filteredAssistedDays.length;
    return lenghtAssistedDays/lenghtAssistances;
  }
}
