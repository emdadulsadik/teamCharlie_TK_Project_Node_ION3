import {
  Injectable
} from "@angular/core";
import {
  Storage
} from '@ionic/storage';
import {
  File /*, Entry, FileError*/
} from '@ionic-native/file';
import {
  Place
} from "../../models/place"
import {
  Location
} from "../../models/location";

@Injectable()
export class PlaceServiceProvider {
  private places: Place[] = [];
  constructor(public storage: Storage, public file: File) {
    console.log('Hello PlaceServiceProvider Provider');
  }

  addPlace(title: string,
    description: string,
    location: Location,
    imageUrl: string) {
    const place = new Place(title, description, location, imageUrl);
    /* this.places.push(place);*/
    this.storage.set('places', this.places.push(place))
      .then()
      .catch(
        err => {
          this.places.splice(this.places.indexOf(place), 1);
        }
      );
  }

  loadPlaces() {
    return this.places.slice();
  }


  deletePlace(index: number) {
    const place = this.places[index];
    this.places.splice(index, 1);
    this.storage.set('places', this.places)
      .then(
        () => {
          this.removeFile(place);
        }
      )
      .catch(
        err => console.log(err)
      );
  }

  private removeFile(place: Place) {
    const currentName = place.imageUrl.replace(/^.*[\\\/]/, '');
    this.file.removeFile(this.file.dataDirectory, currentName)
      .then(
        () => console.log('Removed File')
      )
      .catch(
        () => {
          console.log('Error while removing File');
          this.addPlace(place.title, place.description, place.location, place.imageUrl);
        }
      );
  }
  fetchPlaces() {
    return this.storage.get('places')
      .then(
        (places: Place[]) => {
          this.places = places != null ? places : [];
          return this.places;
        }
      )
      .catch(
        err => console.log(err)
      );
  }

}
