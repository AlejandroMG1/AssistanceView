import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthleteListPage } from '../athlete-list/athlete-list';
import { Schedule } from '../../data/schedule';
import { Athlete } from '../../data/athlete';

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
export class GroupSchedulePage implements OnInit {

  group: {
    id: number,
    name: string,
    schedules: Schedule[],
    athletes:Athlete[]
  };
  schedules: Schedule[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupSchedulePage');
    console.log(this.schedules);
  }

  showGroupAthletes(schedule: Schedule){
    this.navCtrl.push(AthleteListPage,{athletes: this.group.athletes,date: schedule});
  }
  ngOnInit(){
    this.group = this.navParams.data;
    this.schedules = this.group.schedules;
    
  }
}
