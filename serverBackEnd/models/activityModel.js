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

var User = require('../models/usersModel');

/**
 * [locationSchema description]
 * @type {Schema}
 */

//  var setWalkingSchema = new Schema({
//     lat:{type: Number, required: true},
//     lng:{type: Number, required: true},
//     addressfull:{type: String, required: true},
//     activity:{type: String, required: true},
//     user : {type: Schema.Types.ObjectId,ref:'User'},
//     created: {type: Date,  default: Date.now }
// });

var activitySchema = new Schema({
    location : { type:Object}, 
    setWalkingUserID: {type: String, required: false },
    activity:{type: String, required: false },
    user : {type: Schema.Types.ObjectId,ref:'User'},    
    start : { type:Date, required:false },
    end : { type:Date, required:false }
});




module.exports = mongoose.model('Activity', activitySchema);