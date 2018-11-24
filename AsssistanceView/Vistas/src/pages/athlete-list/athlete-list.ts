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
  athletes: Athlete[];
  date: Schedule;
  assistance: Assistance;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navParams: NavParams,
    private athletesProvider: AthletesProvider,
    private assistanceReport: AssistanceProvider
  ) {
    console.log(this.assistanceReport.getAllAsistaceReport());
  }

  ngOnInit() {
    this.groupId = this.navParams.get('groupId');
    this.athletes = this.athletesProvider.getAthletesByIdGroup(this.groupId);
    this.date = this.navParams.get('date');
    console.log(this.date);
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteListPage');
  }

  athleteAssisted(athlete: Athlete) {}
}
