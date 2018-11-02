import { Assistance } from "./assistance.interfaz";

export interface Athlete{
    id:number;
    dni:number;
    name:string;
    assistance: Assistance[];
}