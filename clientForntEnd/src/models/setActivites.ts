
import { Location } from "./location";

export class SetActivity{
	constructor(public location: Location, 
				public setWalkingUserID?: string,
				public activity?: string,
				public start?: Date,
				public end?: Date,
				public distance?: string, 
 ){
	}
}
