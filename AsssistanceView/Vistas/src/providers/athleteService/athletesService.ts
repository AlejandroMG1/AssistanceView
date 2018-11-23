import { HttpClient } from '@angular/common/http';
import { Athlete } from '../../data/athlete';
import athleteDummy from '../../data/dummy/athleteDummy';

const API: string = 'http://localhost:8200';

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
    /* let athleteGroup: Athlete[] = [];
    for(let athlete of this.athleteList){
      if(athlete.idGroup=== id){
        athleteGroup.push(athlete);
      }
    }
    return athleteGroup; */
    return this.http.get<any>(API + '/atletas/');
  }
}
