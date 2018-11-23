export class Assistance {
  id: number;
  assisted: boolean;
  date: string;
  idAthlete: number;
  idGroup: number;
  constructor(id: number, assisted: boolean, date: string, idAthlete: number, idGroup: number) {
    this.id = id;
    this.assisted = assisted;
    this.date = date;
    this.idAthlete = idAthlete;
    this.idGroup = idGroup;
  }
}
