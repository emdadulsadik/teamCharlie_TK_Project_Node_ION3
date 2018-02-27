import {
  Component,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Location
} from '../../models/location';
import {
  DatePicker
} from '@ionic-native/date-picker';
import {
  ActivityRecordsProvider
} from '../../providers/activity-records/activity-records';
import {
  Storage
} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  @ViewChild('datePicker') datePicker;
  dataInicial: String;
  maxDate: any = '2020-01-01';
  dateTime: String;
  locations: Location[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public activityRecordsProvide: ActivityRecordsProvider,
    public storage: Storage,
    //  private datePicker: DatePicker
  ) {
    // this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
    console.log(this.dateTime);
    // console.log(this.dataInicial);
  }

  open() {
    if (!this.dataInicial) {
      this.dataInicial = new Date().toISOString();
      setTimeout(() => {
        this.datePicker.open();
      }, 50)
    } else {
      this.datePicker.open();
    }
  }


  searchTheActivity() {
    this.storage.get('userId').then((userId) => {
      this.activityRecordsProvide.getActivityForTimeline(userId).subscribe((data) => {
        this.locations = data;
        console.log(this.locations);
      });
    }).catch((err) => {
      console.log(err);
    })
  }

}
