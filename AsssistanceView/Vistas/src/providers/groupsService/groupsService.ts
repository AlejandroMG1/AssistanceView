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

  addGroup(name: string){
    return this.http.post<string>(`${environment.api}/groups`, {
      name
    });
  } 

  getGroup(id: number) {
    return this.http.get<Group[]>(`${environment.api}/groups`, {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
