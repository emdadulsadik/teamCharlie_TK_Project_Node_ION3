import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline/timeline';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [TimelineComponent],
	imports: [IonicModule],
	exports: [TimelineComponent]
})
export class ComponentsModule {}
