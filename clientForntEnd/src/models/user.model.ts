export class User {
    constructor(
    			public userName: string,
    			public userRole: string,
    			public emailAddress: string,
                public password: string,
                public firstName?: string,
                public lastName?: string,
               
					) {}
}