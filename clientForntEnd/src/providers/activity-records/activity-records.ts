import {  Injectable } from '@angular/core';
import 'rxjs/Rx';
import {  Http, Response } from "@angular/http";
import {  Observable } from 'rxjs/Rx';
import {  SetActivity } from "../../models/setActivites";
import {  Location } from "../../models/location";
import { User } from "../../models/user.model";
import {  Headers } from '@angular/http';
import { TimelineActivites } from "../../models/timelineActivites";
import { TimelineLocation } from "../../models/timelineLocation";
import { AggregatedTimeline } from "../../models/aggregatedTimeline";
/*
  [ Activity Records Viewer ]
  @author - Emdadul Sadik

*/

@Injectable()
export class ActivityRecordsProvider {

  private locations: Location[] = [];
  private setactivites: SetActivity[] = [];
  private users: User[]=[];

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
  getWalkingRecords( id) {    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.devUrl + 'user/walkinglist/' + id, {
        headers: headers
    }).map((response: Response) => {  return response.json().obj ; })
  }


  getCyclingRecords( id) {    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.devUrl + 'user/cyclinglist/' + id, {
        headers: headers
    }).map((response: Response) => {  return response.json().obj ; })
  }


  getDrivingRecords( id) {    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.devUrl + 'user/drivinglist/' + id, {
        headers: headers
    }).map((response: Response) => {  return response.json().obj ; })
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
          transformedLocation.push( new SetActivity(activity.location) );
        }
        return transformedLocation;
      })
  }





  getActivityForTimeline( id) {    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.devUrl + 'user/activityList/' + id, {
        headers: headers
    }).map((response: Response) => {  
      
      const locations = response.json().obj ;
     
      let timelineActivites: TimelineActivites[] = [];

      let setAccc:TimelineLocation[]=[];

      let conCate:any; 

      for(let location of locations.activity){
        var activity = location.activity;
        var startpoint = location.startpoint;
        var endpoint = location.endpoint; 
        var start = location.start;
        var end = location.end;  
        // userActivity.push(activity,startpoint,endpoint,startTime, endTime); 

        timelineActivites.push(new TimelineActivites(activity,startpoint,endpoint,start,end))
      }
      console.log(timelineActivites); 

      for (let userLocation of locations.location){
       var formatedAdres = userLocation.formatedAdres ; 
       var created = userLocation.created; 

       setAccc.push(new TimelineLocation(formatedAdres,created))
      }
       console.log(setAccc);


      //  console.log(setAccc.concat(timelineActivites))
      // console.log(userLocation); 
      
      const result = {
        ...setAccc,
        ...timelineActivites
      }

      // for (let aggregate of result){
      //     console.log(aggregate);
      // }

      // var result = timelineActivites.concat(setAccc)

      // const allObjectMerged = Object.assign(setAccc,timelineActivites); 

      //  console.log("O allah please help me",allObjectMerged); 
      console.log(result);

      return locations
    
    })
  }



  //   /**
  //  * [getLocation description]
  //  * @author-Khondakar Readul Islam
  //  * @version 1.0.0 
  //  * 
  //  */
  // getActivityForTimeline(id) {
 

  //   return this.http.get(this.devUrl + 'user/activityList/' + id, )
  //     .map((response: Response) => {
  //       const locations = response.json().obj;
  //       console.log(locations);
  //       const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);

        
  //       let transformedLocation: Location[] = [];

  //       // Object.keys(locations).forEach(function(prop){
  //       //   // console.log(prop); 
  //       //   // console.log(locations[prop]); 
  //       //   console.log(locations.activity.length)
  //       //   for(let i = 0, l = locations.activity.length; i < l; i++) {
  //       //     // `i` will take on the values `0`, `1`, `2`,..., i.e. in each iteration
  //       //     // we can access the next element in the array with `data.items[i]`, example:
  //       //     // 
            
  //       //     var activity = locations.activity[i].activity;
  //       //     transformedLocation.push(new Location(activity))
  //       //     console.log(activity);
  //       //     // 
  //       //     // Since each element is an object (in our example),
  //       //     // we can now access the objects properties with `obj.id` and `obj.name`. 
  //       //     // We could also use `data.items[i].id`.
  //       // }
  //       // })
  //       for (let location of locations.activity ) {
  //         // console.log(get(['activity', 0, 'activity' ],location));
  //         console.log(location.formatedAdres)
  //         transformedLocation.push(new Location(
  //           location.activity
        
                      
  //         ));

        
  //       }
  //       this.locations = transformedLocation;
  //       return transformedLocation;
        
  //     })
  //   // .catch((error: Response) => Observable.throw(error.json()));
  activity
    
  // }

//   getProperty(json, path) {
//     var tokens = path.split(".");
//     var obj = json;
//     for (var i = 0; i < tokens.length; i++) {
//         obj = obj[tokens[i]];
//     }
//     return obj;
// }



}
