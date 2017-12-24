import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveActivitesPage } from './live-activites';

@NgModule({
  declarations: [
    LiveActivitesPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveActivitesPage),
  ],
})
export class LiveActivitesPageModule {}
