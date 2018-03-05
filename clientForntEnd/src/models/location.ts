export class Location{
	constructor(public lat?:number, 
				public lng?:number, 
				public formatedAdres?:string,
				public userName?: string,
				public userRole?: string,
				public firstName?: string,
				public lastName?: string,
				public emailAddress?: string,
				public imageURL?: string,
				public created?:Date,
				public startpoint?: string,
				public endpoint?: string,
				public activity?: string, 
				public setWalkingUserID?: string,
				public start?: Date,
				public end?: Date,
				public distance?: string, 
				public timedelta?: string, ){
	}
}