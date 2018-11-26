import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { format } from 'date-fns';
import { Schedule } from '../../data/schedule';
import { Observable } from 'rxjs';
@Injectable()
export class scheduleProvider {
  constructor(public http: HttpClient) {}

  getScheduleById(id: number) {
    
    return this.http.get<Schedule[]>(`${environment.api}/schedule`, {
      params: new HttpParams().set('date', id.toString())
    });
  }
  addSchedule(idGroup: string): Observable<string> {
    

    let date: string = format(new Date(), 'DD MMM YYYY');

    let day: Schedule = { idGroup, date };

    return this.http.post<string>(`${environment.api}/schedule`, 
      day
    );
  }

  getSchedulesByIdGroup(id: string) {
    return this.http.get<Schedule[]>(`${environment.api}/schedule`, {
      params: new HttpParams().set('idGroup', id)
    });
  }
}
