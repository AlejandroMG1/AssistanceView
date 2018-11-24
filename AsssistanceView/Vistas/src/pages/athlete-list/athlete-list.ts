import { Component, OnInit } from '@angular/core';
import {
  Platform,
  ActionSheetController,
  IonicPage,
  NavParams
} from 'ionic-angular';
import { Athlete } from '../../data/athlete';
import { Assistance } from '../../data/assistance';
import { Schedule } from '../../data/schedule';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { AssistanceProvider } from '../../providers/assistancesService/assistanceService';
import { Observable } from 'rxjs/Observable';

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
  groupId: number;
  athletes$: Observable<Athlete[]>;
  date: Schedule;
  assistances: Assistance[];

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navParams: NavParams,
    private athletesProvider: AthletesProvider
  ) //private assistanceReport: AssistanceProvider
  {
    //console.log(this.assistanceReport.getAllAsistaceReport());
  }

  ngOnInit() {
    this.groupId = this.navParams.get('groupId');
    this.athletes$ = this.athletesProvider.getAthletesByIdGroup(this.groupId);
  }

  ionViewDidLoad() {}

  athleteAssisted(index: number) {
    console.log(this.assistances[index]);
  }
}
