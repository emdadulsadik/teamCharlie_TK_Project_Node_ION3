import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookProvider } from '../../providers/facebook/facebook';

import { FacebookSigninPage }from '../facebook-signin/facebook-signin';

import { UsertabsPage} from '../usertabs/usertabs';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {
  userData = null; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,private facebookProvider: FacebookProvider) {
  }

  ionViewDidLoad() {
    this.facebookProvider.getUserData().then(profile=>{
      console.log('profile:',profile);
      this.userData = {email: profile['email'],first_name:profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
    });
  }
  shareStatus(){
    this.facebookProvider.shareStatus();
  }

  onFacebookLogout(){
    this.facebookProvider.logout().then(()=>{
      this.navCtrl.setRoot('FacebookSigninPage');
    })
  }


  /**
   * @description- Get the token value form sqlLite Storage
   * @author-Khondakar Readul Islam
   * @type {Promise<any>}
   * @memberOf UserManagementPage
   */
  token: Promise < any > = this.storage.get('token').then((val) => {
    return this.token = val;
  }).catch(
    (err) => {
      console.log(err);
    }
  )

  /**
   * @description- Change the Footbar to default if token is null
   * @author-Khondakar Readul Islam
   * @memberOf UserManagementPage
   */
  goToRootAgain() {
    this.storage.get('token').then((val) => {
      if (val == null) {
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.navCtrl.setRoot(UsertabsPage);
      }
    })
  }
}
