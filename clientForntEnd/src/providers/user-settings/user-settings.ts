import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { User } from "../../models/user.model";
import { Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

/**
 * [Injectable description]
 */
@Injectable()
export class UserSettingsProvider {

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello UserServiceProvider Provider');
  }

  	/**
     * [signup description] 
     * @author-Khondakar Readul Islam
     * @version 1.0.0 
  	 * @param {User} user [description]
  	 */
    createUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:5000/user/signup', body, {headers: headers})
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
        return this.http.post('http://localhost:5000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }




  

}
