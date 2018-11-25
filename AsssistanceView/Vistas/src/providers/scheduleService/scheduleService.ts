import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Assistance } from '../../data/assistance';
import { environment } from '../../environments/environment';

import { format } from 'date-fns';
import { Schedule } from '../../data/schedule';
@Injectable()
export class scheduleProvider {
  private scheduleList: Schedule[] = [];
  constructor(public http: HttpClient) {}

  getScheduleById(id: number) {
    debugger;
    return this.http.get<Schedule[]>(`${environment.api}/schedule`, {
      params: new HttpParams().set('date', id.toString())
    });
  }
  addSchedule(idGroup: number): number {
    debugger;
    let todayDate = new Date();
    //let date: string = format(new Date(), 'DD MMM YYYY');
    let today: string =
      todayDate.getDate() +
      '/' +
      todayDate.getMonth() +
      '/' +
      todayDate.getFullYear();
    let day: Schedule = { id: this.scheduleList.length, idGroup, date: today };
    if (
      !this.scheduleList.find(
        schedule => schedule.idGroup == idGroup && schedule.date == day.date
      )
    ) {
      this.scheduleList.push(day);
      return day.idGroup;
    }
  }

  getSchedulesByIdGroup(id: number) {
    return this.http.get<Assistance[]>(`${environment.api}/schedule`, {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
