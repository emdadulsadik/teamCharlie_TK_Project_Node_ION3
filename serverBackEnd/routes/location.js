/**
 * [express description]
 * @type {[type]}
 */
const express = require('express');
/**
 * [router description]
 * @type {[type]}
 */
const router = express.Router();
/**
 * [bcrypt description]
 * @type {[type]}
 */
/**
 * [jwt description]
 * @type {[type]}
 */
const jwt = require('jsonwebtoken');

 /**
 * [locationModel description]
 * @type {[type]}
 */
var locationModel = require('../models/locationModel'); 
var ActivityModel = require('../models/activityModel'); 
const UserSignInModel = require('../models/usersModel'); 

// router.get('/allLocation', (req,res,next)=>{
//     locationModel.find()
//     .populate('user')
//     .exec((err, locations)=>{
//              /**
//          * [if description]
//          * @param  {[type]} err [description]
//          * @return {[type]}     [description]
//          */
//         if(err){
//             return res.status(500).json({
//                 title: 'Error',
//                 error: err
//             });
//         }
//           /**
//          * [message description]
//          * @type {String}
//          */
//         res.status(201).json({
//             message:'Your name is registerd',
//             obj: locations 
//         });

//     })
// });



// /**
//  * [description]
//  * @author-Khondakar Readul Islam created:"2018-02-26T23:06:43.208Z"
//  * @version 1.0.0 
//  * @param  {[type]}   'passUpdate/:id' [description]
//  * @param  {Function} (req,res,next)   [description]
//  * @return {[type]}                    [description]
//  */
// router.get('/activityList/:id/created', (req,res,next)=>{
//     locationModel.find({user:req.params.id, created:"2018-02-26T23:06:43.208Z"})
//     .populate('user')
//     .exec((err, locations)=>{
//              /**
//          * [if description]
//          * @param  {[type]} err [description]
//          * @return {[type]}     [description]
//          */
//         if(err){
//             return res.status(500).json({
//                 title: 'Error',
//                 error: err
//             });
//         }

//         /**
//          * [message description]
//          * @type {String}
//          */
//         res.status(201).json({
//             message:'Your name is registerd',
//             obj: locations
//         });

//     })
// });


/**
 * [description]
 * @author-Khondakar Readul Islam created:"2018-02-26T23:06:43.208Z"
 * @version 1.0.0 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
router.get('/activityList/:id', (req,res,next)=>{
    UserSignInModel.findById(req.params.id)
    .populate('location')
    .populate('activity')
    .exec((err, locations)=>{
             /**
         * [if description]
         * @param  {[type]} err [description]
         * @return {[type]}     [description]
         */

         
        if(err){
            return res.status(500).json({
                title: 'Error',
                error: err
            });
        }

        /**
         * [message description]
         * @type {String}
         */
        res.status(201).json({
            message:'Your name is registerd',
            obj: locations
        });

    })
});






/**
 * [description]
 * @author-Khondakar Readul Islam created:"2018-02-26T23:06:43.208Z"
 * @version 1.0.0 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
// router.get('/activityList/:id', (req,res,next)=>{
//     var ObjectId = require("mongoose").Types.ObjectId;
//     locationModel.find(

//         { user : req.params.id } 
//     )
    
//     .populate('activity')
//     .populate('user')

//     // .aggregate([
//     //     { $unwind : '$location' }
//     // ])
    
//     .exec((err, locations)=>{
//              /**
//          * [if description]
//          * @param  {[type]} err [description]
//          * @return {[type]}     [description]
//          */

         
//         if(err){
//             return res.status(500).json({
//                 title: 'Error',
//                 error: err
//             });
//         }

//         /**
//          * [message description]
//          * @type {String}
//          */
//         res.status(201).json({
//             message:'Your name is registerd',
//             obj: locations
//         });

//     })
// });


 



// router.use('/:id', (req,res,next)=>{
//         jwt.verify(req.params.id, new Buffer('Allah', 'base64'),(err,decoded)=>{
//                 if(err){
//                     return res.status(401).json({
//                         title: 'Not Authenticated',
//                         error: err
//                     });
//                 }
//                 next();
//         })
// });

/**
 * [description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0
 * @param  {[type]} '/location'                      [description]
 * @param  {[type]} (req,res,next)                 [description]
 * @param  {[type]} });		addLocation.save((err,result [description]
 * @return {[type]}                                [description]
 */
router.post('/:id/:formatedAdres', (req,res,next)=>{
   // var decoded = jwt.decoded(req.query.token);
   UserSignInModel.findById(req.params.id, (err, user)=>{
         /**
         * [if description]
         * @param  {[type]} err [description]
         * @return {[type]}     [description]
         */
        if(err){
            return res.status(500).json({
                title: 'Error',
                error: err
            });
        }
        var addLocation = new locationModel({
            lat: req.body.lat,
            lng: req.body.lng,
            formatedAdres: req.params.formatedAdres,
            user: req.params.id
        });
        /**
         * [description]
         * @param  {[type]} (err,result [description]
         * @return {[type]}             [description]
         */
        addLocation.save((err,result)=>{
            /**
             * [if description]
             * @param  {[type]} err [description]
             * @return {[type]}     [description]
             */
            if(err){
                return res.status(500).json({
                    title: 'Error',
                    error: err
                });
            }
            user.location.push(result);
            user.save();

            // var activity = new ActivityModel({
            //     location:{
            //         start: { lat: req.body.lat, lng: req.body.lng },
            //         end: { lat: req.body.lat, lng: req.body.lng }
            //     },

            //     activity: 'still',
            //     start: Date(),
            //     end: Date(), 
            //     startpoint: req.params.formatedAdres,
            //     endpoint: req.params.formatedAdres,
            //     user: req.params.id
            // });

            // activity.save();
            
            res.status(201).json({
                message:'Your name is registerd',
                obj: result 
            });
        });





       
    })

   
    
});








module.exports = router;