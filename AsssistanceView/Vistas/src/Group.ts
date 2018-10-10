import{Athlete}from "./Athlete";
import{Schedule}from "./schedule";

export class Group{
    id: number;
    name: string;
    schenduls: Schedule[];
    athletes:Athlete[];
}