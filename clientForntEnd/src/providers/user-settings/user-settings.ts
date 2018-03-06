import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { User } from "../../models/user.model";
import { Headers } from '@angular/http';

/**
 * [Injectable description]
 */
@Injectable()
export class UserSettingsProvider {
    token:Promise<any>;
 
  constructor(public http: Http) {
    console.log('Hello UserServiceProvider Provider');
  }

  liveUrl = 'https://infinite-sea-86282.herokuapp.com/';
  //  devUrl = 'http://localhost:5000/';
  	/**
     * [signup description] 
     * @author-Khondakar Readul Islam
     * @version 1.0.0 
  	 * @param {User} user [description]
  	 */
    createUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.liveUrl +'user/signup', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }
    /**
     * [signin description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0 
     * @param {User} user [description]
     */
    loggin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.liveUrl+'user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


   /**
    * [deleted description]
    * @author-Khondakar Readul Islam
    * @version 1.0.0 
    * @param {[type]} userID [description]
    */
    deleted(userID) {
      return this.http.delete(this.liveUrl +'user/'+userID)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
    }


    /**
     * [resetPass description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0 
     * @param {User}   user   [description]
     * @param {[type]} userID [description]
     */
    resetPass(user: User, userID){
       const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
         return this.http.patch(this.liveUrl +'user/'+userID, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }




 

}
