import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gamification',
  templateUrl: 'gamification.html',
})
export class GamificationPage {
 


constructor(  public navCtrl: NavController,
  public navParams: NavParams,
 ) {
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad GamificationPage');
  }


  

}
