import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteHistoricalListPage } from './athlete-historical-list';

@NgModule({
  declarations: [
    AthleteHistoricalListPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteHistoricalListPage),
  ],
})
export class AthleteHistoricalListPageModule {}
