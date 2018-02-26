/**
 * [mongoose description]
 * @type {[type]}
 */
var mongoose = require('mongoose');
/**
 * [Schema description]
 * @type {[type]}
 */

 var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var ChatGroup = require('../models/chatGroupModel');


/**
 * [locationSchema description]
 * @type {Schema}
 */
var chatMessageSchema = new Schema({
    form:{type: String},
    chat : {type: Schema.Types.ObjectId,ref:'ChatGroup'},
    message: {type: String}, 
   
});

chatMessageSchema.plugin(timestamps);
module.exports = mongoose.model('ChatMessage', chatMessageSchema);