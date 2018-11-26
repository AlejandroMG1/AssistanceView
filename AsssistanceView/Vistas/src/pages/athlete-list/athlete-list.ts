import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonicPage, NavParams, Platform, Toggle } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Assistance } from '../../data/assistance';
import { Athlete } from '../../data/athlete';
import { Schedule } from '../../data/schedule';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { AssistanceProvider } from '../../providers/assistancesService/assistanceService';

/**
 * Generated class for the AthleteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-list',
  templateUrl: 'athlete-list.html'
})
export class AthleteListPage implements OnInit {
  groupId: string;
  athletes$: Observable<Athlete[]>;
  date: string;
  assistances: Assistance[];
  sch: Schedule;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navParams: NavParams,
    private athletesProvider: AthletesProvider,
    private assistanceProvider: AssistanceProvider
  ) {}

  ngOnInit() {
    this.sch = this.navParams.get('schedule');
    this.date  = this.sch.date;

    this.groupId = this.navParams.get('idGroup');
    this.athletes$ = this.athletesProvider.getAthletesByIdGroup(this.groupId);
  }

  takeAssistance(athlete: Athlete, miss: Toggle){
    console.log(miss);
    this.assistanceProvider.setAssistanceReport(miss.value, athlete._id, this.sch._id).subscribe(
      id => {

      }
    );
    
  }
}
