import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  TabsPage
} from '../tabs/tabs';
import {
  UsertabsPage
} from '../usertabs/usertabs';
import {
  Storage
} from '@ionic/storage';
import {
  SetActivity
} from "../../models/setActivites";
import {
  Geolocation
} from '@ionic-native/geolocation';
import {
  SetActivitiesProvider
} from '../../providers/set-activities/set-activities';
declare var google;

@IonicPage()
@Component({
  selector: 'page-set-driving',
  templateUrl: 'set-driving.html',
})
export class SetDrivingPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  activity : string = "driving";
  setActivity : SetActivity[] = [];
  lat: any;
  lng: any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public storage: Storage,
      public geolocation: Geolocation,
      public stActivityProvider: SetActivitiesProvider ) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad SetWorkingPage');
      this.getWalkingData();

    }

  /**
   * @description- Get the token value form sqlLite Storage
   * @author- Emdadul Sadik
   * @type {Promise<any>}
   * @memberOf UserManagementPage
   */
  token: Promise < any > = this.storage.get('token').then((val) => {
    return this.token = val;
  }).catch( err => console.log(err) );

  /**
   * @description- Go back to root page if token is valid.
   * @author- Emdadul Sadik
   * @memberOf SetActivity
   */
  goToRootAgain() {
    this.storage.get('token').then((val) => {
      if (val == null) { this.navCtrl.setRoot(TabsPage);} 
      else { this.navCtrl.setRoot(UsertabsPage); }
    })
  }


   /**
   * @description - Get Values from Storage (SQlite IndedDB)
   * @author- Emdadul Sadik
   * @memberOf SetActivity
   */
  userId: Promise < any > = this.storage.get('userId').then((val) => {
    return this.userId = val;
  }).catch( err => console.log(err) );

  setWalkingUserID: Promise < any > = this.storage.get('setWalkingUserID').then((val) => {
    return this.setWalkingUserID = val;
  }).catch( err => console.log(err) );

  setActivities: Promise < any > = this.storage.get('setActivities').then((val) => {
    return this.setActivities = val;
  }).catch( err => console.log(err) );



  /**
   * @description- Set Marker on Map
   * @author-Emdadul Sadik
   * @memberOf SetActivity
   */
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }



   /**
   * @description - Set Start Activity on Map and also subscribe Nodejs Backend.
   * @author- Emdadul Sadik
   * @memberOf SetActivity
   */

  startDriving() {
    this.geolocation.getCurrentPosition().then(      
      (location) => {
          let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
          let mapOptions = { center: latLng, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter()
          });
          var geocoder = new google.maps.Geocoder();
          var addressfull = [];
          geocoder.geocode(
            { 'latLng': latLng }, 
            function (results, status) {
              if ( status !== google.maps.GeocoderStatus.OK) {
                alert(status);
              }            
              var address = (results[0].formatted_address);
              addressfull.push(address);
          });
          
          var addressfullValues = addressfull.values();
          console.log('See3', addressfullValues.next().value);
          var parsingAddress = JSON.stringify('See', addressfull)
          var bodyObject = new SetActivity(latLng, parsingAddress, this.activity);
          console.log(bodyObject);

          this.storage.get('userId').then((userId) => {

            this.stActivityProvider.startWalkingInfo(bodyObject, userId)
              .subscribe(
                data => {
                  console.log(data);
                  this.storage.set('setWalkingUserID', data.setWalkingUserID);
                  this.storage.set('setActivities', data.activity);                
                },

                error => console.log(error) );
          }).catch( err => console.log(err) );

          let content = `<h4>${latLng}</h4> <br> <p> </p>`;
          this.addInfoWindow(marker, content);
          console.log(this.map);
        }

    ).catch( (error) => {console.log('Error getting location', error); });


  }


   /**
   * @description - Set End Activity on Map and also subscribe Nodejs Backend.
   * @author- Emdadul Sadik
   * @memberOf SetActivity
   */

  endDriving() {

    this.geolocation.getCurrentPosition().then(
      location => {
          let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
          let mapOptions = { center: latLng, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP};
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter()
          });
          var geocoder = new google.maps.Geocoder();
          var addressfull = [];
          geocoder.geocode( { 'latLng': latLng }, (results, status) => {
                if (status !== google.maps.GeocoderStatus.OK) {
                  alert(status);
                }          
                var address = (results[0].formatted_address);
                addressfull.push(address);
            });

          var addressfullValues = addressfull.values();
          console.log('See3', addressfullValues.next().value);
          var parsingAddress = JSON.stringify(addressfull);        
          var bodyObject = new SetActivity(latLng,parsingAddress,this.activity);

          console.log(bodyObject);

          this.storage.get('setWalkingUserID').then( (setWalkingUserID) => {          
            this.stActivityProvider.endWalkingInfo( bodyObject, setWalkingUserID)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );
          }).catch((err) => console.log(err) ) ;         

          let content = `<h4>${latLng}</h4> <br><p> </p>`;
          this.addInfoWindow(marker, content);
          console.log(this.map);
        }

    ).catch( error => console.log('Error getting location', error) );

  }

  getWalkingData(){

    this.storage.get('userId').then((userId) => {
      this.stActivityProvider.getLocation(userId).subscribe(
        data=> console.log(data),
        error=> console.log('getDriving Error', error)
      );
    }).catch( err => console.log(err) );


  }

}
