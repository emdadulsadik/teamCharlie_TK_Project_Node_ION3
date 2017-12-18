
/**
 * [mongoose description]
 * @type {[type]}
 */
var mongoose = require('mongoose');
/**
 * [Schema description]
 * @type {[type]}
 */
var Schema = mongoose.Schema;
/**
 * [mongooseUniqueValidator description]
 * @type {[type]}
 */
var mongooseUniqueValidator = require('mongoose-unique-validator');

/**
 * [userSchema description]
 * @type {Schema}
 */
var userSchema = new Schema({
    userName:{type: String, required: true, unique: true},
    userRole:{type: String },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    emailAddress: {type: String, required: true, unique: true},
    signupDate: Date, 
});

/**
 * [description]
 * @param  {[type]} 'save' [description]
 * @param  {[type]} (next  [description]
 * @return {[type]}        [description]
 */
userSchema.pre('save',(next)=>{
	/**
	 * [usersModel description]
	 * @type {[type]}
	 */
	var user = this; 

	var currentDate = new Date();
	/**
	 * [if description]
	 * @param  {[type]} !usersModel.signupDate [description]
	 * @return {[type]}                        [description]
	 */
	if(!user.signupDate){
		user.signupDate = currentDate; 
	}
	next(); 
})

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);