import {Athlete} from "../../data/athlete";
import athleteDummy from "../../data/dummy/athleteDummy";

export class AthletesProvider {
  athleteList: Athlete[] = [];

  constructor() {
    this.athleteList = athleteDummy;
  }

  addAthlete(dni: number, name: string, idGroup: number) {
    let athlete: Athlete = new Athlete(this.athleteList.length, dni, name, idGroup);
    this.athleteList.push(athlete);
  }

  getAthletesByIdGroup(id: number) {
    let athleteGroup: Athlete[] = [];
    for(let athlete of this.athleteList){
      if(athlete.idGroup=== id){
        athleteGroup.push(athlete);
      }
    }
    return athleteGroup;
  }
}
