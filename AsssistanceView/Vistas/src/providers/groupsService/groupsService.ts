import {Group} from "../../data/group";
import {Injectable} from "@angular/core";
import { Storage } from "@ionic/storage";
@Injectable()
export class GroupsProvider {
  private groupList:  Group[] = [];

  constructor(private storage: Storage) {
    this.getDBSchedules();
  }
  getDBSchedules(){
    this.storage.get("group")
      .then(data => {
        if(data==null){
          this.groupList = [];
        }else{
          this.groupList = JSON.parse(data);
          console.log(JSON.parse(data));
        }
      });
  }
  getGroupList() {
    return this.groupList;
  }
  addGroup(name: string){
    let group: Group = new Group(this.groupList.length+1, name,false);
    this.groupList.push(group);
    this.updateGroup()
  }
  getGroup (id: number) {
    return this.groupList[id];
  }
  getGroupByName(name: string){
    let groupIndex = this.groupList.findIndex((group) => {
      return group.name == name;
    });
    console.log(groupIndex);
    return this.groupList[groupIndex].id;
  }
  editGroup (group: Group, id: number) {
    this.groupList[id] = group;
  }
  getGroupsNotComplete(){
    return this.groupList.filter( group => group.complete == false );
  }
  updateCompleteGroup(group: Group){
    group.complete =true;
  }
  updateGroup(){
    this.storage.set("group", JSON.stringify(this.groupList));
  }

}
