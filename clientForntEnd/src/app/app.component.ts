import { Component,ViewChild } from '@angular/core';
import { Platform, NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {SocialActivitiesPage} from '../pages/social-activities/social-activities';
import {MainIndexPage} from '../pages/main-index/main-index';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  socialProfile:any = SocialActivitiesPage;
  userManagement: any =  MainIndexPage;

@ViewChild('nav') nav:NavController;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
     public menuCtr:MenuController,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  onPageLoad(){
      this.nav.setRoot(MainIndexPage);
      this.menuCtr.close();
  }
}
