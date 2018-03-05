export class AggregatedTimeline{
	constructor(
				public formatedAdres?:string,
				public created?:Date,
				public startpoint?: string,
				public endpoint?: string,
				public activity?: string, 
				public start?: Date,
				public end?: Date, ){
	}
}