import {Group} from "../../data/group";

export class GroupsProvider {
  private groupList:  Group[];
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
