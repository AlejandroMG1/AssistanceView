export class Athlete{
  id: number;
  idGroup: number;
  name: string;
  dni: number;
  constructor(id: number, dni: number, name: string, idGroup: number){
    this.id = id;
    this.dni = dni;
    this.name = name;
    this.idGroup = idGroup;
  }
}
