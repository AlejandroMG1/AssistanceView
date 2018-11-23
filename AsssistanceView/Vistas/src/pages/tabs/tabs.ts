import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { GroupsViewPage } from '../groups-view/groups-view';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GroupsViewPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
