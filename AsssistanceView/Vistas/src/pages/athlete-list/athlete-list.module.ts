import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteListPage } from './athlete-list';

@NgModule({
  declarations: [
    AthleteListPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteListPage),
  ],
})
export class AthleteListPageModule {}
