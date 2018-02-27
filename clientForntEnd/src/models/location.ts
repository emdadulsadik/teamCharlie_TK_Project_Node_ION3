export class Location{
	constructor(public lat:number, 
				public lng:number, 
				public formatedAdres?:string,
				public userName?: string,
				public userRole?: string,
				public firstName?: string,
				public lastName?: string,
				public emailAddress?: string,
				public imageURL?: string,
			 	public created?:Date ){
	}
}
