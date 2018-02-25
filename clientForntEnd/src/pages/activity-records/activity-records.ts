import { Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-activity-records',
  templateUrl: 'activity-records.html',
})
export class ActivityRecordsPage {

 
    constructor(public navCtrl: NavController,
      public navParams: NavParams) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityRecordsPage');
  }


}
