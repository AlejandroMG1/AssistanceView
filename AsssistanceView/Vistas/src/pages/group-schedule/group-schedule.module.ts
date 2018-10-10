import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupSchedulePage } from './group-schedule';

@NgModule({
  declarations: [
    GroupSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupSchedulePage),
  ],
})
export class GroupSchedulePageModule {}
