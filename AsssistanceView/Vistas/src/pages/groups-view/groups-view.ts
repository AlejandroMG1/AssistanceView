import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Groups } from '../../Example';
import { Group } from '../../Group';
import { GroupSchedulePage } from '../group-schedule/group-schedule';

/**
 * Generated class for the GroupsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups-view',
  templateUrl: 'groups-view.html',
})
export class GroupsViewPage {


  splash = true;
  tabBarElement: any;
  groupList = Groups;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  showGroupSchedule(group:Group){
    this.navCtrl.push(GroupSchedulePage,group);
  }

}
