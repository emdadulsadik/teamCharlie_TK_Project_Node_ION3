import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindHotelPage } from './find-hotel';

@NgModule({
  declarations: [
    FindHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(FindHotelPage),
  ],
})
export class FindHotelPageModule {}
