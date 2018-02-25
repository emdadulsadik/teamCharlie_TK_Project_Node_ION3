import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsertabsPage } from '../usertabs/usertabs';
import { Storage } from '@ionic/storage';
import { SetWalkingPage } from '../set-walking/set-walking';
import { SetDrivingPage } from '../set-driving/set-driving';
import { SetCyclingPage } from '../set-cycling/set-cycling';

@IonicPage()
@Component({
  selector: 'page-set-activities',
  templateUrl: 'set-activities.html',
})
export class SetActivitiesPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetActivitiesPage');
  }

   /**
 * @description- Get the token value form sqlLite Storage
 * @author-Khondakar Readul Islam
 * @type {Promise<any>}
 * @memberOf UserManagementPage
 */
token:Promise<any> = this.storage.get('token').then((val)=>{
  return this.token = val;
}).catch(
  (err)=>{
    console.log(err);
  }
)


/**
* @description- Change the Footbar to default if token is null
* @author-Khondakar Readul Islam
* @memberOf UserManagementPage
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

goToSetWorking(){
  this.navCtrl.push('SetWalkingPage');
}

goToSetDriving(){
  this.navCtrl.push('SetDrivingPage');
}

goToSetCycling(){
  this.navCtrl.push('SetCyclingPage')
}

}
