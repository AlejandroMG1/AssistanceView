import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AthletesProvider} from "../../providers/athleteService/athletesService";
import {AssistanceProvider} from "../../providers/assistancesService/assistanceService";
import {Athlete} from "../../data/athlete";

/**
 * Generated class for the AthleteHistoricalListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-historical-list',
  templateUrl: 'athlete-historical-list.html',
})
export class AthleteHistoricalListPage {
  athletes: Athlete[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private athletesProvider:AthletesProvider,
              private assistanceReport: AssistanceProvider) {
    let idGroup = this.navParams.get("idGroup");
    this.athletes = this.athletesProvider.getAthletesByIdGroup(idGroup);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteHistoricalListPage');
  }

}
