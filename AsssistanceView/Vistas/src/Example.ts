import{Group}from "./Group";
import{Schedule}from "./schedule";
import{Athlete}from "./Athlete";

export const Athletes1:Athlete[]=[
    {id:1,dni:2335698498,name:"juan"},
    {id:3,dni:7336648953,name:"Alejandro"},
    {id:8,dni:8443497358,name:"Jenni"}
];

export const Athletes2:Athlete[]=[
    {id:2,dni:1008491354,name:"Daniel"},
    {id:5,dni:3548798135,name:"Manuel"},
    {id:4,dni:1009645354,name:"Armando"}
];


export const Athletes3:Athlete[]=[
    {id:9,dni:5413456453,name:"Santiago"},
    {id:7,dni:5643623162,name:"Camilo"},
    {id:5,dni:5731984563,name:"Sofia"}
];

export const Schedules1:Schedule[]=[
    {id:1,date:"01/08/18"},
    {id:2,date:"03/08/18"},
    {id:3,date:"08/08/18"}
];
export const Schedules2:Schedule[]=[
    {id:4,date:"02/08/18"},
    {id:5,date:"04/08/18"},
    {id:6,date:"09/08/18"}
];

export const Groups:Group[]=[
    {id:11, name:"Equipo1", schenduls:Schedules1,athletes:Athletes1},
    {id:12, name:"Equipo2", schenduls:Schedules2,athletes:Athletes2},
    {id:14,name:"Equipo3", schenduls:Schedules1,athletes:Athletes3}
];