import {
  Injectable
} from '@angular/core';
import 'rxjs/Rx';
import {
  Http,
  Response
} from "@angular/http";
import {
  Observable
} from 'rxjs/Rx';
import {
  SetActivity
} from "../../models/setActivites";
import {
  Location
} from "../../models/location";
import {
  Headers
} from '@angular/http';

@Injectable()
export class SetActivitiesProvider {
  private setactivites: SetActivity[] = [];
  // liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
  devUrl = 'http://localhost:5000/';

  private setActivity: SetActivity[] = [];

  constructor(public http: Http) {
    console.log('Hello set Activites Provider');
  }
  /**
   * [addLocation description] 
   * @author-Khondakar Readul Islam
   * @version 1.0.0 
   * @param {Location} location [description]
   */
  startWalkingInfo(activityBody: SetActivity, id) {
    // const mergedBody = new SetActivity(latLng, setActivity); 
    const body = JSON.stringify(activityBody);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.devUrl + 'user/start/' + id, body, {
        headers: headers
      })
      .map((response: Response) => response.json())
    // .catch((error: Response) => Observable.throw(error.json()));
  }

  endWalkingInfo(activityBody: SetActivity, id){

  const body = JSON.stringify(activityBody);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.patch(this.devUrl + 'user/end/' + id, body, {
        headers: headers
      })
      .map((response: Response) => response.json())

  }
  /**
   * [getLocation description]
   * @author-Khondakar Readul Islam
   * @version 1.0.0 
   * 
   */
  getLocation(id) {
    return this.http.get(this.devUrl + 'user/walkinglist/' + id)
      .map((response: Response) => {
        const activities = response.json().obj
        let transformedLocation: SetActivity[] = [];
        for (let activity of activities) {
          transformedLocation.push(new SetActivity(activity.location));
        }
        // this.locations = transformedLocation; 
        return transformedLocation;
      })
    // .catch((error: Response) => Observable.throw(error.json()));
  }

}
