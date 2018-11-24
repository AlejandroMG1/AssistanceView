import { Schedule } from '../../data/schedule';
import scheduleDummy from '../../data/dummy/scheduleDummy';
import 'rxjs/add/observable/from';
import { Assistance } from '../../data/assistance';
import { HttpClient, HttpParams } from '@angular/common/http';

const API: string = 'http://localhost:8200';

export class scheduleProvider {
  private scheduleList: Schedule[] = [];
  constructor(public http: HttpClient) {}
  getScheduleById(id: number) {
    return this.http.get<Assistance[]>(API + '/schedule', {
      params: new HttpParams().set('idAthlete', id.toString())
    });
  }
  addSchedule(idGroup: number): number {
    let todayDate = new Date();
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
      return day.id;
    }
    return -1;
  }
  getSchedulesByIdGroup(id: number) {
    return this.http.get<Assistance[]>(API + 'schedule', {
      params: new HttpParams().set('idGroup', id.toString())
    });
  }
}
