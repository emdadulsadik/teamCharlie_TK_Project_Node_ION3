import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {PlaceServiceProvider} from "../../providers/place-service/place-service";
import {Place} from "../../models/place";
import { UsertabsPage} from '../usertabs/usertabs';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  place: Place;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private placesService: PlaceServiceProvider,
              public storage: Storage) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }


  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
    this.placesService.deletePlace(this.index);
    this.onLeave();
  }



  

}
