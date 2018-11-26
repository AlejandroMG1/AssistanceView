import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Schedule } from '../../data/schedule';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { scheduleProvider } from '../../providers/scheduleService/scheduleService';
import { AthleteListPage } from '../athlete-list/athlete-list';
import { Group } from '../../data/group';
import { switchMap } from 'rxjs/operators';

/**
 * Generated class for the GroupSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-schedule',
  templateUrl: 'group-schedule.html'
})
export class GroupSchedulePage implements OnInit {
  group: Group;
  schedule$: Observable<Schedule[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private scheduleProvider: scheduleProvider,
    private athleteProvider: AthletesProvider,
  ) {}

  ngOnInit() {
    this.group = this.navParams.data;
    console.log('Group: ', this.group);
    this.schedule$ = this.scheduleProvider.getSchedulesByIdGroup(
      this.group._id
    );
    console.log(this.group._id);
  }

  showGroupAthletes(schedule$: Schedule) {
  
    this.navCtrl.push(AthleteListPage, {
      idGroup: this.group._id, //Anadido por Juan gallo
      schedule: schedule$ 
    });
  }

  addSchedule() {
    this.schedule$ = this.scheduleProvider.addSchedule(this.group._id).pipe(switchMap(idSchedule =>
      this.scheduleProvider.getSchedulesByIdGroup(this.group._id)));
    
  }
  createAssistanceReports(idSchedule: number) {
    //this.assistanceProvider.addAllAssistanceReport();
    this.athleteProvider.getAthletesByIdGroup(this.group._id);
    this.scheduleProvider.getScheduleById(idSchedule);
  }
}
