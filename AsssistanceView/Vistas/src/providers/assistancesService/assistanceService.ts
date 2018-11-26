import { Assistance } from '../../data/assistance';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AssistanceProvider {
  assistanceList: Assistance[] = [];

  constructor(private http: HttpClient) {
    //this.assistanceList = assistanceDummy;
  }

  setAssistanceReport(
    miss: boolean,
    idAthlete: string,
    idSchedule: string
  ) {
    const url = `${environment.api}/assistances`
    if(miss){
      return this.http.post(url, {
        idAthlete,
        idSchedule
      })
    }
    
    return this.http.delete(`${url}/${idAthlete}/${idSchedule}`);
  }

  getAssistanceReport(idReport) {
    let index = this.assistanceList.findIndex(data => {
      return data._id == idReport;
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
  } */

  getAllAsistaceReport() {
    return this.assistanceList;
  }

  getReportsByAthleteId(id: string) {
    return this.assistanceList.filter(
      assistance => assistance.idAthlete === id
    );
  }

  getIdReportByScheduleIdAthleteId(date: string, idAthlete: string): number {
    return this.assistanceList.findIndex(
      assistance =>
        assistance.idAthlete === idAthlete && assistance.date === date
    );
  }

  getIdReportByScheduleId(date: string, idSchedule: string): Assistance[] {
    let assistances: Assistance[] = [];
    for (let assistance of this.assistanceList) {
      if (assistance.date == date && assistance.idSchedule == idSchedule) {
        assistances.push(assistance);
      }
    }

    return assistances;
  }
}
