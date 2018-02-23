
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
var UserTrackingSchema = new Schema({

    user: { type: String, required: true },
    location : { type: Object , required: true },    
    activity: { type: String , required: false },
    start : { type: Date, required: false },
    end : { type: Date , required: fale },

    created : { type: Date  },
    modified : { type: Date }


});

/**
 * [description]
 * @param  {[type]} 'save' [description]
 * @param  {[type]} (next  [description]
 * @return {[type]}        [description]
 */
UserTrackingSchema.pre('save',(next)=>{	

	var currentDate = new Date();

	this.created = currentDate;

	this.modified = currentDate;

	next(); 
})

UserTrackingSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model( 'UserTracking' , UserTrackingSchema);