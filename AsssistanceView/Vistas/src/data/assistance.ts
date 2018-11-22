export class Assistance{
  id: number;
  assisted: boolean;
  date: string;
  idAthlete: number;
  constructor(id:number, assisted:boolean, date: string,idAthlete: number){
    this.id = id;
    this.assisted = assisted;
    this.date = date;
    this.idAthlete = idAthlete;
  }
}
