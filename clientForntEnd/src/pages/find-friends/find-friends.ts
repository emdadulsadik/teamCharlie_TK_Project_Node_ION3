import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsertabsPage } from '../usertabs/usertabs';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Location } from '../../models/location';
import { LocationProvider } from '../../providers/location/location';
import { ProfilePage } from '../profile/profile'; 

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

declare var google;
@IonicPage()
@Component({
  selector: 'page-find-friends',
  templateUrl: 'find-friends.html',
})
export class FindFriendsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  hide:boolean = false; 

  // location: Location[];
  locations: Location[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
     public storage: Storage,
     public geolocation: Geolocation, 
    public locationService: LocationProvider,
    public http: Http 
     
   ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFavouritePlacePage');
    // console.log(this.location);
     this.mapInit();
   this.locationService.getLocation().subscribe((data)=>{
          this.locations = data ; 
          console.log(this.locations);
   });
// this.findAddress();
  
  }

 

  mapInit(){
    this.geolocation.getCurrentPosition().then(
      location =>{
        let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
      });
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


/**
* @description- Change the Footbar to default if token is null
* @author-Khondakar Readul Islam
* @memberOf UserManagementPage
*/
userId:Promise<any> = this.storage.get('userId').then((val)=>{
  return this.userId = val; 
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
onLocateMe(){
  
  this.geolocation.getCurrentPosition().then(
    location =>{
      let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.storage.get('userId').then((userId)=>{
        this.locationService.addLocation(latLng,userId)
        .subscribe(
          data=>{console.log(latLng)},
          error=>{console.log(error)});
        }).catch((err)=>{
          console.log(err);
        }) 

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
     });
 
  let content = `<h4>${latLng}</h4> <br>
                  <p> </p>`;         
 
  this.addInfoWindow(marker, content);

      console.log( this.map); 
    }
    
  ).catch((error) => {
     console.log('Error getting location', error);
   });

   
}
/**
* @description- Change the Footbar to default if token is null
* @author-Khondakar Readul Islam
* @memberOf UserManagementPage
*/
onLocateFriends(){
var addressFull = [];
for(var i = 0; i<this.locations.length; ++i) {

  let marker = new google.maps.Marker({
    map: this.map, 
    animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(this.locations[i].lat, this.locations[i].lng),
  });

  var geocoder = new google.maps.Geocoder();
  var conCatLatLng = {lat: parseFloat(''+this.locations[i].lat), lng:parseFloat(''+this.locations[i].lng+'')};
  console.log(conCatLatLng); 
    
  geocoder.geocode({ 'latLng': conCatLatLng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
            // console.log(results);
            var address = (results[0].formatted_address);
            //  console.log(address);
           // `<p>Address : ${address}</p>`
           addressFull.push(address);


        }
    }); 

  var content = `<h4>${this.locations[i].userName}</h4>
                  <p>${ addressFull[i] }  </p>
                  <p>Active Time: ${this.locations[i].created}</p>
                  `; 
  this.addInfoWindow(marker, content);
  
}
  this.hide = !this.hide; 
console.log('Hitting')
}




viewProfile(location: Location, index:number){
  this.navCtrl.push('ProfilePage', {location: location, index: index});
}


/**
* @description- Change the Footbar to default if token is null
* @author-Khondakar Readul Islam
* @memberOf UserManagementPage
*/
addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}



}
