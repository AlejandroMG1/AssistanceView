import {Group} from "../../data/group";
import groupDummy from "../../data/dummy/groupDummy";

export class GroupsProvider {
  private groupList:  Group[];
  constructor(){
    this.groupList = groupDummy;
    console.log(this.groupList);
  }
  getGroupList() {
    return this.groupList;
  }
  addGroup(name: string){
    let group: Group = new Group(this.groupList.length+1, name);
    this.groupList.push(group);
  }
  getGroup (id: number) {
    return this.groupList.findIndex((group) => {
      return group.id == id;
    })
  }
  editGroup (group: Group, id: number) {
    this.groupList[id] = group;
  }

}
