import {
  Injectable
} from '@angular/core';
import 'rxjs/add/operator/map';
import {
  Http
} from "@angular/http";
import {
  Observable
} from 'rxjs/Rx';
import {
  Facebook,
  FacebookLoginResponse
} from '@ionic-native/facebook';

@Injectable()
export class FacebookProvider {

  constructor(public facebook: Facebook) {
    console.log('Hello FacebookProvider Provider');
  }

  login() {
    return this.facebook.login(['email', 'public_profile', 'user_photos', 'user_posts']);
  }

  getLoginStatus() {
    return this.facebook.getLoginStatus();
  }

  logout() {
    return this.facebook.logout();
  }
  shareStatus() {
    let opts = {
      method: 'share',
      href: 'http://khondakar.com',
      caption: 'Bismillah',
      description: 'Allah is the one god',
      hashtag: '#ionic'
    }
    return this.facebook.showDialog(opts);
  }

  getUserData() {
    return this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []);
  }

}
