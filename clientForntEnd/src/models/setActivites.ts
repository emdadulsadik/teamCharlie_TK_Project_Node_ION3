
import { Location } from "./location";

export class SetActivity{
	constructor(public location: Location,
				public startpoint?: string,
				public endpoint?: string,
				public activity?: string, 
				public setWalkingUserID?: string,
				public start?: Date,
				public end?: Date,
				public distance?: string, 
				public timedelta?: string,
 ){
	}
}
