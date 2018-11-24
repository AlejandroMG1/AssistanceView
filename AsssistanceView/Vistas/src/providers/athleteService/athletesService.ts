import { Athlete } from '../../data/athlete';
import athleteDummy from '../../data/dummy/athleteDummy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// const API: string = 'http://localhost:8200';

@Injectable()
export class AthletesProvider {
  athleteList: Athlete[] = [];

  constructor(public http: HttpClient) {
    this.athleteList = athleteDummy;
  }

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
    let athleteGroup: Athlete[] = [];
    for (let athlete of this.athleteList) {
      if (athlete.idGroup === id) {
        athleteGroup.push(athlete);
      }
    }

    // let arrei = this.http.get<any[]>(API + '/atletas/');
    return athleteGroup;
  }
}
