import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { Group } from '../../data/group';
import { AthleteHistoricalListPage } from '../athlete-historical-list/athlete-historical-list';
import { Observable } from 'rxjs';

/**
 * Generated class for the GroupViewHistoricalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-view-historical',
  templateUrl: 'group-view-historical.html'
})
export class GroupViewHistoricalPage implements OnInit {
  groupList$: Observable<Group[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private groupsProvider: GroupsProvider
  ) {}

  ngOnInit() {
    this.groupList$ = this.groupsProvider.getGroupList();
  }

  onLoadList(id: number) {
    this.navCtrl.push(AthleteHistoricalListPage, { idGroup: id });
  }
}
