
import { Location } from "./location";
import { SetActivity } from "./setActivites"

export class User {
    constructor(
    			public userName: string,
    			public userRole: string,
    			public emailAddress: string,
                public password?: string,
                public firstName?: string,
                public lastName?: string,
                public location?: Location,
                public activity?: SetActivity,
               
					) {}
}