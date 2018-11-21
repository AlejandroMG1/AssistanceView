import {Group} from "../../data/group";
import groupDummy from "../../data/dummy/groupDummy";

export class GroupsProvider {
  private groupList:  Group[];
  constructor(){
    this.groupList = groupDummy;
  }
  addGroupList(groupList:  Group[]){
    this.groupList = groupList;
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
