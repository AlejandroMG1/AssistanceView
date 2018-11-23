import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Athlete } from '../../data/athlete';
import { AssistanceCalculator } from '../../Logic/assistanceCalculator';
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
  asisstances: Assistance[];
  porcentajeAsisstance: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private assistanceProvider: AssistanceProvider, private calculator: AssistanceCalculator) {
    this.athlete = navParams.data;
    this.asisstances = assistanceProvider.getReportsByAthleteId(this.athlete.id)
    this.porcentajeAsisstance = calculator.calculateAssistancePercentageByAthleteId(this.asisstances);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteHistoryPage');
  }

}
