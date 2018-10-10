import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../../Group';
import { Schedule } from '../../schedule';
import { AthleteListPage } from '../athlete-list/athlete-list';

/**
 * Generated class for the GroupSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-schedule',
  templateUrl: 'group-schedule.html',
})
export class GroupSchedulePage {

  group:Group; 
  schedules:Schedule[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.group=navParams.data;
    this.schedules=this.group.schenduls;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupSchedulePage');
  }

  showGroupAthletes(){
    this.navCtrl.push(AthleteListPage,this.group);
  }
}
