import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthletesProvider } from "../../providers/athleteService/athletesService";
import { AssistanceProvider } from "../../providers/assistancesService/assistanceService";
import { Athlete } from "../../data/athlete";
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { AthleteHistoryPage } from '../athlete-history/athlete-history';
import {AssistanceCalculator} from "../../Logic/assistanceCalculator";
import {Group} from "../../data/group";

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
  groupName: string;
  assistencePercentage: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private athletesProvider: AthletesProvider,
              private groupsProvider: GroupsProvider,
              private  assistanceProvider: AssistanceProvider) {
    let calculadora = new AssistanceCalculator();
    let group: Group = this.navParams.get("group");
    this.athletes = this.athletesProvider.getAthletesByIdGroup(group.id);
    this.assistencePercentage = calculadora.calculateAssistancePercentage(this.assistanceProvider.getAssistancesReportByIdGroup(group.id));
    this.groupName = group.name;
  }

  showAthleteHistory(athlete:Athlete){
    this.navCtrl.push(AthleteHistoryPage,{a: athlete});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteHistoricalListPage');
  }

}
