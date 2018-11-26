import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Group } from '../../data/group';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
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
  templateUrl: 'groups-view.html'
})
export class GroupsViewPage {
  splash = true;
  groupList$: Observable<Group[]>;

  constructor(
    private groupsProvider: GroupsProvider,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.groupList$ = this.groupsProvider.getGroupList();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }

  openGroupSchedule(group: Group) {
    this.navCtrl.push(GroupSchedulePage, group);
  }
}
