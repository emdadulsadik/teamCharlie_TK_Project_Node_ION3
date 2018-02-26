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
var chatGroupSchema = new Schema({
    name:{type: String},
    user : {type: Schema.Types.ObjectId,ref:'User'},
    created: {type: Date,  default: Date.now }
});

module.exports = mongoose.model('ChatGroup', chatGroupSchema);