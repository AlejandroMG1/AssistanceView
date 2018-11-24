import { Athlete } from '../../data/athlete';
import athleteDummy from '../../data/dummy/athleteDummy';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API: string = 'http://localhost:8200';

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
    return this.http.get<Athlete[]>(API + '/athletes', {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
