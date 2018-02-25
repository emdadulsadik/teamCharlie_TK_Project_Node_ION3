import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AgmCoreModule } from '@agm/core';

import { TabsPage } from '../pages/tabs/tabs';
import { UsertabsPage } from '../pages/usertabs/usertabs';

import { AddPlacePage } from '../pages/add-place/add-place';
import { PlacePage } from '../pages/place/place';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'
import { UserSettingsProvider } from '../providers/user-settings/user-settings';
import { SignupAndSigninPage } from '../pages/signup-and-signin/signup-and-signin';
import { FeaturesPage } from '../pages/features/features';
import { LocationProvider } from '../providers/location/location';
import { FacebookProvider } from '../providers/facebook/facebook';
import { Facebook } from '@ionic-native/facebook';
import { PlaceServiceProvider } from '../providers/place-service/place-service';
import { ImageUploadProvider } from '../providers/image-upload/image-upload';
import { SetActivitiesProvider } from '../providers/set-activities/set-activities';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    SignupAndSigninPage,
    UsertabsPage,
    FeaturesPage,
    AddPlacePage,
    PlacePage,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey :'AIzaSyAL70RjqzK5w5U0eNd2ANKmf0fzIPEnveQ'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    SignupAndSigninPage,
    UsertabsPage,
    FeaturesPage,
    AddPlacePage,
    PlacePage,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserSettingsProvider,
    LocationProvider,
    FacebookProvider,
    Facebook,
    PlaceServiceProvider,
    ImageUploadProvider,
    SetActivitiesProvider
  ]
})
export class AppModule {}
