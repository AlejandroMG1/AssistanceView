import { Schedule } from "../../data/schedule.interface";
import { Athlete } from "../../data/athlete.interface";

export class GroupsProvider {
  private groupList:  {
    id: number,
    name: string,
    schedules: Schedule[],
    athletes:Athlete[]
  }[];
  addGroupList(groupList:  {
    id: number,
    name: string,
    schedules: Schedule[],
    athletes:Athlete[]
  }[]){
    this.groupList = groupList;
  }
  getGroup(id: number){
    return this.groupList.slice(id,id+1);
  }
}
