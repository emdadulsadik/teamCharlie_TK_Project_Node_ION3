import { Component,OnInit } from '@angular/core';
import {  IonicPage,
          NavController, 
          NavParams,
          App,
          AlertController,
          LoadingController } from 'ionic-angular';
import { UsertabsPage } from '../usertabs/usertabs';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-user-management',
  templateUrl: 'user-management.html',
})
export class UserManagementPage implements OnInit { 

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public storage: Storage,
              public appCtrl: App,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserManagementPage');
  }


  /**
   * 
   * @description - Logout() method, It has two promise one is loading controller
   *                and other is alert controller. After that It clean the token
   *                from the local storage,
   * @author- Khondakar Readul Isla
   * @memberOf UserManagementPage
   */
  doLogout(){
    const alert = this.alertCtrl.create({
           title: 'Logout', 
           message: 'Do You Need fresh Air, We will always have been waiting for you',
           buttons:[
               {
                 text:'No',
                 role:'cancel',
                 handler:()=>{
                   console.log('cancel clicked'); 
                 }
               },
               {
                 text:'Yes',
                 handler:()=>{
                     const loading = this.loadingCtrl.create({
                       content:'Please come back again........'
                     });
                     loading.present().then(()=>{
                      this.storage.clear().then(()=>{
                        setTimeout(()=>{
                          window.location.reload();
                      }, 1000); 
                      this.appCtrl.getRootNav().setRoot(TabsPage)
                     });
                     })
                     

                   loading.onDidDismiss(() => {
                     console.log('Dismissed loading');
                   });
                 }
               }
           ]
    });
    alert.present();
   };

  ngOnInit(){
  
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
