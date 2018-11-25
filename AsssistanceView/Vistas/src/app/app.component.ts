import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AddAthletePage } from '../pages/add-athlete/add-athlete';
import { AddGroupPage } from '../pages/add-group/add-group';
import {scheduleProvider} from "../providers/scheduleService/scheduleService";
import {AthletesProvider} from "../providers/athleteService/athletesService";
import {AssistanceProvider} from "../providers/assistancesService/assistanceService";
import {GroupsProvider} from "../providers/groupsService/groupsService";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') navCtrl: NavController;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController,
              scheduleProvider: scheduleProvider,
              athleteProvider: AthletesProvider,
              assistanceProvider: AssistanceProvider,
              groupProvider: GroupsProvider) {
    groupProvider.getDBSchedules();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    scheduleProvider.getDBSchedules();
    athleteProvider.getDBSchedules();
    assistanceProvider.getDBSchedules();

  }

  showAddAthlete(){
    this.navCtrl.popToRoot();
    this.navCtrl.push(AddAthletePage);
    this.menuCtrl.close();
  }

  showAddGroup(){
    this.navCtrl.popToRoot();
    this.navCtrl.push(AddGroupPage);
    this.menuCtrl.close();
  }

}
