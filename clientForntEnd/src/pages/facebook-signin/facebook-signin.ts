import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {FacebookProvider} from '../../providers/facebook/facebook';
import { FacebookPage } from '../facebook/facebook'; 

import { UsertabsPage} from '../usertabs/usertabs';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-facebook-signin',
  templateUrl: 'facebook-signin.html',
})
export class FacebookSigninPage {

  constructor(public navCtrl: NavController, private plt: Platform, public storage: Storage, public navParams: NavParams, private facebookProvider: FacebookProvider) {
    this.plt.ready().then(()=>{
      this.facebookProvider.getLoginStatus().then(data=>{
        if(data.status === 'connected'){
          this.navCtrl.setRoot('FacebookPage');
        }
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacebookSigninPage');
  }

  logginFB(){
    this.facebookProvider.login().then(data=>{
      console.log('login', data); 
      this.navCtrl.setRoot('FacebookPage');
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
