import { Component,ViewChild } from '@angular/core';
import { Platform, NavController,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { UsertabsPage } from '../pages/usertabs/usertabs';
import { FavouritePlacePage } from '../pages/favourite-place/favourite-place';
import { LiveActivitesPage } from '../pages/live-activites/live-activites';
import { UserManagementPage } from '../pages/user-management/user-management';
import { ProfilePage } from '../pages/profile/profile';
import { TimelinePage } from '../pages/timeline/timeline'
import { GamificationPage } from '../pages/gamification/gamification';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, icon:string}>;
  
  rootPage:any = TabsPage;
  hometabs:any = UsertabsPage;

  constructor(platform: Platform, 
       statusBar: StatusBar, 
       splashScreen: SplashScreen,
      public storage: Storage,
    ) {
                        platform.ready().then(() => {
                          statusBar.styleDefault();
                          splashScreen.hide();
                        });
      this.pages = [
        { title: 'User Management', component: 'UserManagementPage',icon:'construct' },
        { title: 'Favourite Places', component: 'FavouritePlacePage' ,icon:'bookmarks'},
        { title: 'Profile', component: 'ProfilePage',icon:'people' },
        { title: 'Live Activites', component: 'LiveActivitesPage', icon:'bicycle' },
        { title: 'Timeline', component: 'TimelinePage',icon:'timer' },
        { title: 'Gamification', component: 'GamificationPage',icon:'game-controller-b' },
      ];
    
  }
  ngOnInit(){

    this.storage.get('token').then((val)=>{
      if(val!==null){
        this.rootPage = UsertabsPage; 
      }
    })
  
  }
 /**
   * @description- Get the token value form sqlLite Storage
   * @author-Khondakar Readul Islam
   * @type {Promise<any>}
   * @memberOf MyApp
   */
  token:Promise<any> = this.storage.get('token').then((val)=>{
    return this.token = val;
  }).catch(
    (err)=>{
      console.log(err);
    }
  )
ionViewDidLoad(){

 
}



goToRootAgain(){
  this.nav.setRoot(TabsPage);
}

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
