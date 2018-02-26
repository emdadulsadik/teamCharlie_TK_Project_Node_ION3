import {  Injectable } from '@angular/core';
import 'rxjs/Rx';
import {  Http, Response } from "@angular/http";
import {  Observable } from 'rxjs/Rx';
import {  SetActivity } from "../../models/setActivites";
import {  Location } from "../../models/location";
import {  Headers } from '@angular/http';

/*
  [ Activity Records Viewer ]
  @author - Emdadul Sadik

*/

@Injectable()
export class ActivityRecordsProvider {

  private setactivites: SetActivity[] = [];

  // liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
  devUrl = 'http://localhost:5000/';

  private setActivity: SetActivity[] = [];

  constructor(public http: Http) {
    console.log('Hello Activity Records Provider');
  }
  /**
   * [Pulling activity records in terms of Friend(user) OR/AND TIME Delta] 
   * @author-Emdadul Sadik
   * @version 1.0.0 
   * @param {Location} location [description]
   */
  getActivityRecords( activityBody : SetActivity, id) {
    
    const body = JSON.stringify(activityBody);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.devUrl + 'user/activities/' + id, body, {
        headers: headers
    }).map((response: Response) => response.json())
  }


  /**
   * [getLocation]
   * @author-Emdadul Sadik
   * @version 1.0.0 
   * 
   */
  getLocation(id) {
    return this.http.get( this.devUrl + 'user/activities/' + id )
      .map((response: Response) => {
        const activities = response.json().obj
        let transformedLocation: SetActivity[] = [];
        for (let activity of activities) {
          transformedLocation.push(new SetActivity(activity.location));
        }
        return transformedLocation;
      })
  }

}
