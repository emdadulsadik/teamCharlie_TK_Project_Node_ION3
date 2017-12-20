import { Component,ViewChild, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';
import { MainIndexPage } from '../main-index/main-index';
import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage  {

 /* token:any = this.storage.get('token');*/

    
    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = ContactPage;
    tab4Root = MainIndexPage; 

    token:Promise<any> = this.storage.get('token').then((val)=>{
        return this.token = val;
      }).catch(
        (err)=>{
          console.log(err);
        }
      )

  constructor(private storage: Storage, public navParam:NavParams ) {

  }



ionViewDidLoad(){

                                                                                                                                                                                                                                                                        
// console.log( this.isLoggedIn());
console.log(this.token);

}

    // isLoggedIn() {        
    //      return  Promise.all([
    //             this.StorageGet("token", true).then((data: any) => { return this.token = data })

    //         /*     this.StorageGet("token", true).then(()=>{
    //                return Promise.resolve(this.token)
    //              }).then((data)=>{
    //               return  this.token = data; 
    //              })*/

    //           /* this.storage.get('token').then((val)=>{return this.token = val;})*/
               
    //         ]) 
         
    //       }
// token:any;

//  private StorageGet(Key: any, Default: any) {

//         return new Promise((resolve, reject) => {
//             this.storage.get(Key).then((data) => {
//                 console.log("Token Value<<------------Storage.get ", Key, data);
//                 resolve(data);
//             })
//                 .catch(() => {
//                     console.log("Token Value------------>>Load DEFAULTS", Default);
//                     resolve(Default);
//                 });
//         });
//     }
  

}
