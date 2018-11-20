import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Athlete } from '../../data/athlete';
import { Assistance } from '../../data/assistance';
import { Schedule } from '../../data/schedule';

/**
 * Generated class for the AthleteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-list',
  templateUrl: 'athlete-list.html',
})
export class AthleteListPage implements OnInit{

  athletes: Athlete[];
  date: Schedule;
  assistance: Assistance;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteListPage');
  }
  ngOnInit(){
    this.athletes=this.navParams.get("athletes");
    this.date = this.navParams.get("date");
    console.log(this.date);
  }
  athleteAssisted(athlete: Athlete){
    
  }
  
}
