import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Athlete } from '../../data/athlete';
import { Assistance } from '../../data/assistance';
import { AssistanceProvider } from '../../providers/assistancesService/assistanceService';

/**
 * Generated class for the AthleteHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-history',
  templateUrl: 'athlete-history.html',
})
export class AthleteHistoryPage {

  athlete: Athlete;
  asisstances: Assistance[]=[];
  porcentajeAsisstance: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private assistanceProvider: AssistanceProvider) {
    this.athlete = this.navParams.get("a");
    this.asisstances = assistanceProvider.getReportsByAthleteId(this.athlete.id)}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteHistoryPage');
  }

}
