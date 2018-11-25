import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Schedule } from '../../data/schedule';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { scheduleProvider } from '../../providers/scheduleService/scheduleService';
import { AthleteListPage } from '../athlete-list/athlete-list';
import { Group } from '../../data/group';
import { AssistanceProvider } from '../../providers/assistancesService/assistanceService';

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
    private assistanceProvider: AssistanceProvider
  ) {}

  ngOnInit() {
    this.group = this.navParams.data;
    console.log('Group: ', this.group);
    let a = 1;
    this.schedule$ = this.scheduleProvider.getSchedulesByIdGroup(
      this.group.idGroup
    );
    console.log(this.group._id);
  }

  showGroupAthletes(schedule$: Schedule) {
    debugger;
    this.navCtrl.push(AthleteListPage, {
      idSchedule: schedule$.idGroup
    });
  }

  addSchedule() {
    let id = this.scheduleProvider.addSchedule(this.group._id);
    this.schedule$ = this.scheduleProvider.getSchedulesByIdGroup(
      this.group._id
    );
    if (id > -1) {
      this.createAssistanceReports(id);
    }
    //console.log(this.assistanceProvider.getAllAsistaceReport());
  }
  createAssistanceReports(idSchedule: number) {
    //this.assistanceProvider.addAllAssistanceReport();
    this.athleteProvider.getAthletesByIdGroup(this.group._id);
    this.scheduleProvider.getScheduleById(idSchedule);
  }
}
