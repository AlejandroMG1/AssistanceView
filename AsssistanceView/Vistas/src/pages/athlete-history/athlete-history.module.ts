import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteHistoryPage } from './athlete-history';

@NgModule({
  declarations: [
    AthleteHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteHistoryPage),
  ],
})
export class AthleteHistoryPageModule {}
