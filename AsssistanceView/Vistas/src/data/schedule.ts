export class Schedule{
  date: string;
  id: number;
  idGroup: number;
    constructor(id: number, idGroup:number, date: string){
    this.date = date;
    this.id = id;
    this.idGroup = idGroup;
    }
}
