import {Athlete} from "../../data/athlete";

export class AthletesProvider {
  athleteList: Athlete[] = [];
  addAthlete (dni: number, name: string, idGroup: number){
    let athlete: Athlete = new Athlete(dni, name, this.athleteList.length, idGroup);
    this.athleteList.push(athlete);
  }
}
