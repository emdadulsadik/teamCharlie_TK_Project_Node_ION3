import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController } from "ionic-angular";
import { Storage } from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';



import { Observable } from 'rxjs/Rx';
import {UserSettingsProvider} from '../../providers/user-settings/user-settings'
import { User } from "../../models/user.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  registers: Observable<any>;
  /**
   * [constructor description]
   * @param {NavController} public navCtrl [description]
   */
    constructor(
      private navCtrl: NavController, 
      private userService: UserSettingsProvider,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private storage: Storage,) {}


    /**
     * [segmentChanged description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {[type]} friends [description]
     * @param {[type]} enemies [description]
     * 
     */
      signOn(form: NgForm) {
         const user = new User(
            form.value.userName, 
            form.value.userRole,
            form.value.emailAddress, 
            form.value.password, 
            form.value.firstName, 
            form.value.lastName
          );
          const loading = this.loadingCtrl.create({
            content: 'Signing you up...'
          });
              loading.present();
              this.userService.createUser(user)
              .subscribe(
                        data => {
                          loading.dismiss();
                          const alert = this.alertCtrl.create({
                          title: 'Signup Successfull!',
                          message: 'Please login to visit your profile!',
                          buttons: ['Ok']
                        });
                          alert.present();
                          form.reset();
                        },
                        error=>{
                            loading.dismiss();
                            const alert = this.alertCtrl.create({
                            title: 'Signup failed!',
                            message: error.message,
                            buttons: ['Ok']
                          });
                            alert.present();
                        }
              );    
      }


      


    
    /**
     * [segmentChanged description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {[type]} friends [description]
     * @param {[type]} enemies [description]
     * 
     */
      signIn(form: NgForm){
            const user = new User(
            form.value.userName, 
            form.value.userRole,
            form.value.emailAddress, 
            form.value.password, 
            form.value.firstName, 
            form.value.lastName
          );
          const loading = this.loadingCtrl.create({
            content: 'We are searching you thanks for your patience ...'
          });
              loading.present();
              this.userService.loggin(user)
              .subscribe(
                        data => {
                          loading.dismiss();
                          this.storage.set('token',data.token);
                          this.storage.set('userId',data.userId);

                        /*  this.storage.get('token').then((val)=>{
                            console.log('The Token ID Is-',val);
                          }).catch(
                            (err)=>{
                              console.log(err);
                            }
                          )*/

                        /*  this.storage.get('userId').then((val)=>{
                            console.log('The User ID Is-',val);
                          }).catch(
                            (err)=>{
                              console.log(err);
                            }
                          )*/
                          const alert = this.alertCtrl.create({
                          title: 'Wellcome to your own world',
                          message: 'Enjoy your tour with cool features',
                          buttons: ['Ok']
                        });
                        this.navCtrl.setRoot(TabsPage).then(() => {
                         setInterval(
                           ()=>{
                              window.location.reload();
                            // $state.go($state.current, $stateParams, {reload: true, inherit: false});
                            },3000
                          )
                          });
                          alert.present();
                          form.reset();
                          
                        },
                        error=>{
                            loading.dismiss();
                            const alert = this.alertCtrl.create({
                            title: 'sigin failed!',
                            message: error.message,
                            buttons: ['Ok']
                          });
                            alert.present();
                        }
              ); 
      }


   


}
