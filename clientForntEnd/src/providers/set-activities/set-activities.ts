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
  addStartActivitiesInfo(activityBody: SetActivity, id, startpoint,activity) {
    // const mergedBody = new SetActivity(latLng, setActivity); 
    const body = JSON.stringify(activityBody);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.devUrl+'user/start/'+id+'/'+startpoint+'/'+activity, body, {
        headers: headers
      })
      .map((response: Response) => response.json())
    // .catch((error: Response) => Observable.throw(error.json()));
  }

  addEndActivitiesInfo(activityBody: SetActivity, id, endpoint){

  const body = JSON.stringify(activityBody);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.patch(this.devUrl+'user/end/'+id+'/'+endpoint,  body, {
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
  getWalkingRecords( id) {    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.devUrl + 'user/singleWalkingInfo/' + id, {
        headers: headers
    }).map((response: Response) => {  return response.json().obj ; })
  }

}
