import {Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { File/*, Entry, FileError*/ } from '@ionic-native/file';
import { Place } from "../../models/place"
import { Location } from "../../models/location";

@Injectable()
export class PlaceServiceProvider {
  private places: Place[] = [];
  constructor(public storage: Storage, public file:File) {
    console.log('Hello PlaceServiceProvider Provider');
  }

}
