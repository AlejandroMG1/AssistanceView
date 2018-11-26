import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Athlete } from '../../data/athlete';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AthletesProvider {
  athleteList: Athlete[] = [];

  constructor(public http: HttpClient) {}

  addAthlete(athlete: Athlete) {
   
    return this.http.post<string>(`${environment.api}/athletes`, athlete).pipe(tap(idAthlete => {
      this.athleteList.push({...athlete, idAthlete: idAthlete});
    }));
  }

  getAthletesByIdGroup(id: string) {
    return this.http.get<Athlete[]>(`${environment.api}/athletes`, {
      params: new HttpParams().set('idGroup', id)
    });
  }
}
