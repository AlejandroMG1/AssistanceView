import { Component } from '@angular/core';
import { GroupsViewPage } from '../groups-view/groups-view';
import {GroupViewHistoricalPage} from "../group-view-historical/group-view-historical";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GroupsViewPage;
  tab2Root = GroupViewHistoricalPage;

  constructor() {

  }
}
