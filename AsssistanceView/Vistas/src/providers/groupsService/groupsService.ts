import { Group } from '../../data/group';
import { HttpClient, HttpParams } from '@angular/common/http';
import groupDummy from '../../data/dummy/groupDummy';
import { Observable } from 'rxjs';

const API: string = 'http://localhost:8200';
export class GroupsProvider {
  private groupList: Group[] = [];
  constructor(public http: HttpClient) {
    //this.groupList = groupDummy;
  }
  /* getGroupList() {
    return this.groupList;
  } */
  /* addGroup(name: string){
    let group: Group = new Group(this.groupList.length+1, name);
    this.groupList.push(group);
  } */
  getGroup(id: number) {
    /* return this.groupList.findIndex((group) => {
      return group.id == id;
    }); */
    return this.http.get(API + '/groups', {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
/* getGroupByName(name: string){
    let groupIndex = this.groupList.findIndex((group) => {
      return group.name == name;
    });
    return this.http.get<Group[]>(API + '/groups', {
      params: new HttpParams().set('name', name.toString())
    });
    console.log(groupIndex);
    return this.groupList[groupIndex].id;
  }
    editGroup (group: Group, id: number) {
    this.groupList[id] = group;
  } */
