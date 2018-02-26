import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsertabsPage } from '../usertabs/usertabs';
import { Storage } from '@ionic/storage';


import { SetActivity } from "../../models/setActivites";
import { Geolocation } from '@ionic-native/geolocation';
import { ActivityRecordsProvider } from '../../providers/activity-records/activity-records';


declare var google;


@IonicPage()
@Component({
  selector: 'page-activity-records',
  templateUrl: 'activity-records.html',
})
export class ActivityRecordsPage {

 
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public storage: Storage,
      public geolocation: Geolocation,
      public ActivityRecordsProvider : ActivityRecordsProvider
    ){}


    ionViewDidLoad() {
      console.log('ionViewDidLoad ActivityRecordsPage');
    }

   /**
   * @description- Get the token value form sqlLite Storage
   * @author-Emdadul Sadik
   * @type {Promise<any>}
   * @memberOf ActivityRecords
   */
  token:Promise<any> = this.storage.get('token').then((val)=>{
    return this.token = val;
  }).catch( err => console.log(err) );


  /**
  * @description- Change the Footbar to default if token is null
  * @author-Emdadul Sadik
  * @memberOf ActivityRecords
  */
  goToRootAgain(){
    this.storage.get('token').then((val)=>{
      if(val==null){
        this.navCtrl.setRoot(TabsPage); 
      }else{
        this.navCtrl.setRoot(UsertabsPage); 
      }
    })
  }


  getActivityRecordsData(){

    this.storage.get('userId').then((userId) => {
      this.ActivityRecordsProvider.getLocation(userId).subscribe(
        data=> console.log(data),
        error=> console.log('getCycling Error', error)
      );
    }).catch( err => console.log(err) );


  }


}
