import {Athlete} from "../../data/athlete";
import athleteDummy from "../../data/dummy/athleteDummy";
import {Injectable} from "@angular/core";
import { Storage } from "@ionic/storage";
@Injectable()
export class AthletesProvider {
  athleteList: Athlete[] = [];

  constructor(private storage: Storage) {
    this.getDBSchedules();
  }
  getAthleteByDni(dni: number) {
    return this.athleteList.findIndex(athlete => athlete.dni == dni);
  }
  getDBSchedules(){
    this.storage.get("athletes")
      .then(data => {
        if(data==null){
          this.athleteList = [];
        }else{
          this.athleteList = JSON.parse(data);
          console.log("Entro");
          console.log(JSON.parse(data));
        }
      });
  }
  addAthlete(dni: number, name: string, idGroup: number) {
    let athlete: Athlete = new Athlete(this.athleteList.length+1, dni, name, idGroup);
    this.athleteList.push(athlete);
    this.updateAthletes();
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
  updateAthletes(){
    this.storage.set("athletes", JSON.stringify(this.athleteList));
  }
}
