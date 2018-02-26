import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker';
@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  today:String;

  constructor(  public navCtrl: NavController,
    public navParams: NavParams,
    // private datePicker: DatePicker
    ) {
      this.today = new Date().toISOString();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

  // showDatePicker(){
  //   this.datePicker.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //   );

  // }

}
