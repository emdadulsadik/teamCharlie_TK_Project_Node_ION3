import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsertabsPage } from '../usertabs/usertabs';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-favourite-place',
  templateUrl: 'favourite-place.html',
})
export class FavouritePlacePage {
  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritePlacePage');
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

}
