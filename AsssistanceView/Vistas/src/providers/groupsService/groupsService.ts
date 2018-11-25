import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Group } from '../../data/group';
import { environment } from '../../environments/environment';

@Injectable()
export class GroupsProvider {
  constructor(public http: HttpClient) {}

  getGroupList() {
    return this.http.get<Group[]>(`${environment.api}/groups`);
  }

  /* addGroup(name: string){
    let group: Group = new Group(this.groupList.length+1, name);
    this.groupList.push(group);S
  } */

  getGroup(id: number) {
    return this.http.get<Group[]>(`${environment.api}/groups`, {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
