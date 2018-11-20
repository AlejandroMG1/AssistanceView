import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Schedule } from '../../data/schedule';
import { Athlete } from '../../data/athlete';
import groups from '../../data/groups';
import { GroupSchedulePage } from '../group-schedule/group-schedule';
import { GroupsProvider } from '../../providers/groups/groups';

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
export class GroupsViewPage implements OnInit{


  splash = true;
  tabBarElement: any;
  groupList: {
    id: number,
    name: string,
    schedules: Schedule[],
    athletes:Athlete[]
  }[];
  GroupSchedulePage = GroupSchedulePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private groupsProvider: GroupsProvider) {
    this.tabBarElement = document.querySelector('.tabbar');
    groupsProvider.addGroupList(this.groupList);
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
  ngOnInit(){
    this.groupList = groups;
  }
}
