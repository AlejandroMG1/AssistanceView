import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
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
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { HttpClientModule } from '@angular/common/http';

let pages = [
  MyApp,
  AboutPage,
  ContactPage,
  TabsPage,
  GroupsViewPage,
  GroupSchedulePage,
  AthleteListPage,
  AddAthletePage
];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GroupsProvider,AthletesProvider,scheduleProvider,AssistanceProvider,
    SQLite,
    Toast,
    
  ]
})
export class AppModule { }
