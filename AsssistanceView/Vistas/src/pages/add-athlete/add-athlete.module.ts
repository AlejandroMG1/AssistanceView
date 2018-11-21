import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAthletePage } from './add-athlete';

@NgModule({
  declarations: [
    AddAthletePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAthletePage),
  ],
})
export class AddAthletePageModule {}
