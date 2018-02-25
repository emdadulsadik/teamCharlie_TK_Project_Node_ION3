import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouritePlacePage } from './favourite-place';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    FavouritePlacePage,
  ],
  imports: [
    IonicPageModule.forChild(FavouritePlacePage),
    AgmCoreModule
  ],
})
export class FavouritePlacePageModule {}
