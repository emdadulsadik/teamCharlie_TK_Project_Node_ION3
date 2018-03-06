
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
 * [imageUploadSchema description]
 * @type {Schema}
 */
var imageUploadSchema = new Schema({
    filename:{type: String},
    originalname:{type: String },
    desc: {type: String},
    created: {type: Date,  default: Date.now }
});

module.exports = mongoose.model('Image', imageUploadSchema);