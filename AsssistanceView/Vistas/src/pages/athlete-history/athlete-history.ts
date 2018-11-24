import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Athlete } from '../../data/athlete';
import { Assistance } from '../../data/assistance';
//import { AssistanceProvider } from '../../providers/assistancesService/assistanceService';
import { AssistanceCalculator } from '../../Logic/assistanceCalculator';

/**
 * Generated class for the AthleteHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-history',
  templateUrl: 'athlete-history.html'
})
export class AthleteHistoryPage {
  athlete: Athlete;
  assistances: Assistance[] = [];
  percentageAssistance: number;
  calculadora: AssistanceCalculator;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athlete = this.navParams.get('a');
    //this.assistances = assistanceProvider.getReportsByAthleteId(this.athlete.id);
    this.calculadora = new AssistanceCalculator();
    this.percentageAssistance = this.calculadora.calculateAssistancePercentageByAthleteId(
      this.assistances
    );
    console.log(
      this.calculadora.calculateAssistancePercentageByAthleteId(
        this.assistances
      )
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteHistoryPage');
  }
}
