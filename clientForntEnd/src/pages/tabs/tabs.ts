import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MainIndexPage} from '../main-index/main-index';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 /* token:any = this.storage.get('token');*/
  tab1Root = this.isLoggedIn()==null?MainIndexPage:HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;


  constructor(private storage: Storage, ) {

  }

ionViewDidLoad(){

                                                                                                                                                                                                                                                                        
console.log(this.isLoggedIn());

}

    isLoggedIn() {        
         return  Promise.all([
                this.StorageGet("token", true).then((data: any) => { return this.token = data })

              /* this.storage.get('token').then((val)=>{return this.token = val;})*/
               
            ]) 
         
          }
 token:any;

 private StorageGet(Key: any, Default: any) {

        return new Promise((resolve, reject) => {
            this.storage.get(Key).then((data) => {
                console.log("Token Value<<------------Storage.get ", Key, data);
                resolve(data);
            })
                .catch(() => {
                    console.log("Token Value------------>>Load DEFAULTS", Default);
                    resolve(Default);
                });
        });
    }
  

}
