import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { GroupsViewPage } from '../pages/groups-view/groups-view';
import {GroupSchedulePage} from '../pages/group-schedule/group-schedule';
import {AthleteListPage} from '../pages/athlete-list/athlete-list';
import {AddAthletePage} from '../pages/add-athlete/add-athlete';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroupsProvider } from '../providers/groupsService/groupsService';
import { AthletesProvider } from '../providers/athleteService/athletesService';
import { scheduleProvider } from '../providers/scheduleService/scheduleService';
import { AssistanceProvider } from '../providers/assistancesService/assistanceService';
import {GroupViewHistoricalPage} from "../pages/group-view-historical/group-view-historical";
import {AthleteHistoricalListPage} from "../pages/athlete-historical-list/athlete-historical-list";
import { AddGroupPage } from '../pages/add-group/add-group';
import { AthleteHistoryPage } from '../pages/athlete-history/athlete-history';
import { NativeStorage } from '@ionic-native/native-storage';
import {IonicStorageModule} from "@ionic/storage";

let pages = [
  MyApp,
  GroupViewHistoricalPage,
  TabsPage,
  AthleteHistoricalListPage,
  GroupsViewPage,
  GroupSchedulePage,
  AthleteListPage,
  AddAthletePage,
  AddGroupPage,
  AthleteHistoryPage
];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GroupsProvider,AthletesProvider,scheduleProvider,AssistanceProvider, NativeStorage,Storage
  ]
})
export class AppModule { }
