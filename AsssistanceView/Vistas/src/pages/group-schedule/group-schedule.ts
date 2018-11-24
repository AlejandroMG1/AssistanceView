import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthleteListPage } from '../athlete-list/athlete-list';
import { Schedule } from '../../data/schedule';
import { Athlete } from '../../data/athlete';
import { scheduleProvider } from '../../providers/scheduleService/scheduleService';
import { AssistanceProvider } from '../../providers/assistancesService/assistanceService';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { Observable } from 'rxjs';

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
  group: {
    id: number;
    name: string;
    schedules: Schedule[];
    athletes: Athlete[];
  };
  schedule$: Observable<Schedule[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private scheduleProvider: scheduleProvider,
    private assistanceProvider: AssistanceProvider,
    private athleteProvider: AthletesProvider
  ) {}

  showGroupAthletes(schedule: Schedule) {
    this.navCtrl.push(AthleteListPage, {
      groupId: this.group.id,
      date: schedule
    });
  }
  ngOnInit() {
    this.group = this.navParams.data;
    this.schedule$ = this.scheduleProvider.getSchedulesByIdGroup(this.group.id);
  }
  addSchedule() {
    let id = this.scheduleProvider.addSchedule(this.group.id);
    this.schedule$ = this.scheduleProvider.getSchedulesByIdGroup(this.group.id);
    if (id > -1) {
      this.createAssistanceReports(id);
    }
    //console.log(this.assistanceProvider.getAllAsistaceReport());
  }
  createAssistanceReports(idSchedule: number) {
    /* this.assistanceProvider.addAllAssistanceReport(
      this.group.id), */
    this.athleteProvider.getAthletesByIdGroup(this.group.id);
    this.scheduleProvider.getScheduleById(idSchedule);
  }
}
