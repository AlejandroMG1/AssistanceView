import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AddAthletePage } from '../pages/add-athlete/add-athlete';
import { AddGroupPage } from '../pages/add-group/add-group';
import { AthleteHistoricalListPage } from '../pages/athlete-historical-list/athlete-historical-list';
import { AthleteHistoryPage } from '../pages/athlete-history/athlete-history';
import { AthleteListPage } from '../pages/athlete-list/athlete-list';
import { ContactPage } from '../pages/contact/contact';
import { GroupSchedulePage } from '../pages/group-schedule/group-schedule';
import { GroupViewHistoricalPage } from '../pages/group-view-historical/group-view-historical';
import { GroupsViewPage } from '../pages/groups-view/groups-view';
import { TabsPage } from '../pages/tabs/tabs';
import { AssistanceProvider } from '../providers/assistancesService/assistanceService';
import { AthletesProvider } from '../providers/athleteService/athletesService';
import { GroupsProvider } from '../providers/groupsService/groupsService';
import { scheduleProvider } from '../providers/scheduleService/scheduleService';
import { MyApp } from './app.component';

let pages = [
  MyApp,
  GroupViewHistoricalPage,
  ContactPage,
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
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GroupsProvider,
    AthletesProvider,
    scheduleProvider,
    AssistanceProvider
  ]
})
export class AppModule {}
