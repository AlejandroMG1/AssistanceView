import {Athlete} from "../../data/athlete";
import athleteDummy from "../../data/dummy/athleteDummy";

export class AthletesProvider {
  athleteList: Athlete[] = [];
  constructor(){
    this.athleteList = athleteDummy;
  }
  addAthlete(dni: number, name: string, idGroup: number) {
    let athlete: Athlete = new Athlete(dni, name, this.athleteList.length, idGroup);
    this.athleteList.push(athlete);
  }
  getAthletesByIdGroup(id: number){
    let athleteGroup: Athlete[];
    athleteGroup = this.athleteList.filter((data: Athlete) => {
      let athletes: Athlete[] = [];
      if(data.idGroup === id){
        athletes.push(data);
      }
      return athletes;
    });
    return athleteGroup;
  }

}