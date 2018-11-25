import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonicPage, NavParams, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Assistance } from '../../data/assistance';
import { Athlete } from '../../data/athlete';
import { Schedule } from '../../data/schedule';
import { AthletesProvider } from '../../providers/athleteService/athletesService';

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
  ) {}

  ngOnInit() {
    this.groupId = this.navParams.get('groupId');
    this.athletes$ = this.athletesProvider.getAthletesByIdGroup(this.groupId);
  }
}
