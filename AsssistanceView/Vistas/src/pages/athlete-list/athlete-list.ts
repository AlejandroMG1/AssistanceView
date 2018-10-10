import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Athlete } from '../../Athlete';

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
export class AthleteListPage {

  athletes:Athlete[];
  groupName:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athletes=navParams.get("athletes");
    this.groupName=navParams.get("name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteListPage');
  }

}
