import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Athlete } from '../../data/athlete';
import { environment } from '../../environments/environment';

@Injectable()
export class AthletesProvider {
  athleteList: Athlete[] = [];

  constructor(public http: HttpClient) {}

  addAthlete(dni: number, name: string, idGroup: number) {
    let athlete: Athlete = new Athlete(
      this.athleteList.length + 1,
      dni,
      name,
      idGroup
    );
    this.athleteList.push(athlete);
  }

  getAthletesByIdGroup(id: number) {
    return this.http.get<Athlete[]>(`${environment.api}/athletes`, {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
