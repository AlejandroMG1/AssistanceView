import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { Athlete } from '../../data/athlete';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { AthleteHistoryPage } from '../athlete-history/athlete-history';
import { Observable } from 'rxjs';

/**
 * Generated class for the AthleteHistoricalListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-historical-list',
  templateUrl: 'athlete-historical-list.html'
})
export class AthleteHistoricalListPage {
  athletes$: Observable<Athlete[]>;
  groupName;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private athletesProvider: AthletesProvider,
    private groupsProvider: GroupsProvider
  ) {}

  ngOnInit() {
    let idGroup = this.navParams.get('idGroup');
    this.athletes$ = this.athletesProvider.getAthletesByIdGroup(idGroup);
    this.groupName = this.groupsProvider.getGroup(idGroup);
  }

  showAthleteHistory(athlete: Athlete) {
    this.navCtrl.push(AthleteHistoryPage, { a: athlete });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteHistoricalListPage');
  }
}
