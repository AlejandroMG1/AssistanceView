import { Assistance } from '../../data/assistance';
import { Athlete } from '../../data/athlete';
import assistanceDummy from '../../data/dummy/assistanceDummy';

export class AssistanceProvider {
  assistanceList: Assistance[] = [];
  constructor() {
    //this.assistanceList = assistanceDummy;
  }
  addAssistanceReport(
    assisted: boolean,
    date: string,
    idAthlete: number,
    idGroup: number
  ) {
    let assistance = new Assistance(
      this.assistanceList.length + 1,
      assisted,
      date,
      idAthlete,
      idGroup
    );
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
  /* addAllAssistanceReport(idGroup: number, athletes: Athlete[], date: string) {
    for (let athlete of athletes) {
      this.addAssistanceReport(false, date, athlete.id, idGroup);
    }
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
  }*/
}
