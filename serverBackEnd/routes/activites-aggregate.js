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
const activityModel = require('../models/activityModel');
const UserSignInModel = require('../models/usersModel'); 



/**
 * [description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0
 * @param  {[type]} '/location'                      [description]
 * @param  {[type]} (req,res,next)                 [description]
 * @param  {[type]} });		addLocation.save((err,result [description]
 * @return {[type]}                                [description]
 */
router.post('/start/:id', (req,res,next)=>{
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

         var addLocation = new activityModel({
             location : {
                 start: {
                    lat: req.body.location.lat,
                    lng: req.body.location.lng
                 },
                 end: {
                     lat: '',
                     lng:  '',
                 }
                    
             },             
             activity: req.body.activity,
             user: req.params.id,
             start : Date(),
             end: ''
         });

         /**
          * [description]
          * @param  {[type]} (err,result [description]
          * @return {[type]}             [description]
          */
         addLocation.save((err,result)=>{
             /**{user:req.params.id,
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
             user.activity.push(result);
             user.save();
             /**
              * [message description]
              * @type {String}
              */
             res.status(201).json({
                 message:'Your name is registerd',
                 obj: result,
                 setWalkingUserID: result._id,
                 activity: result.activity
             });
         })
        
     })
 
    
     
 });


/**
 * [description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
router.patch('/end/:id',(req,res,next)=>{
	activityModel.findById(req.params.id,(err,walkingdata)=>{
		if(err){
			return res.status(500).json({
				title: 'Error',
				error: err
			});
        }
        
        

		walkingdata.location =  {
            start:  {
                            lat: walkingdata.location.start.lat,
                            lng: walkingdata.location.start.lng
                    },
            end :   {
                            lat: req.body.location.lat,
                            lng: req.body.location.lng
                        } 
                }
        walkingdata.end = Date(); 

		walkingdata.save((err,result)=>{
			if(err){
				return res.status(500).json({
					title: 'Error',
					error: err
				});
			}
			res.status(200).json({
				message:'Updated Password', 
				obj:result
			})
		})  
	})
})



/**
 * [description]
 * @author-Emdadul Sadik
 * @version 1.0.0 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
// router.get('/activities/:id', (req,res,next)=>{
//     activityModel.find({user:req.params.id})
//     .populate('user')
//     .exec((err, walkingdata)=>{
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


//         // PLEASE DO NOT REMOVE THE FOLLOWING COMMENTED OUT "AGGREAGTION".
        
//         // db.activities.aggregate([
//         //     { $match: { user:ObjectId("5a3965954ceecf15e09f9d39") } } , 
//         //     { $sort : { start : -1  } } , 
//         //     { $group: { 
//         //             _id : "$start" , 
//         //             start : { $first : "$start"   } , 
//         //             end: { $first : "$end" }, 
//         //             activity:{$first:"$activity"}, 
//         //             id:{ $first: "$_id"  } 
//         //         }
//         //     },
//         //     { $project : { 
//         //             start : { $dateToString : { format: "%Y-%m-%d", date:"$start"  } } , 
//         //             activity:1  
//         //         } 
//         //     }
//         // ]);

//         res.status(201).json({            
//             obj: walkingdata 
//         });

//     })
// });


/**
 * [description]
 * @author-Emdadul Sadik
 * @version 1.0.0 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
router.get('/activities/:id', (req,res,next)=>{
    var ObjectId = require("mongoose").Types.ObjectId; 
    activityModel.aggregate( [ 
        { $match :{ user : new ObjectId(req.params.id) } },        
        { $sort : { start : -1  } } , 
        { $group: { 
                _id : "$start", 
                start : { $first : "$start"   } , 
                end: { $first : "$end" }, 
                activity:{$first:"$activity"}, 
                id:{ $first: "$_id"  },
                location : { $first: "$location" },
                address : { $first: "$address" },
                user: {$first:"$user"}
                
            }
        },
        { $project : { 
                _id : "$id",
                start : { $dateToString : { format: "%Y-%m-%d,%H:%M", date:"$start"  } } , 
                end : { $dateToString : { format: "%Y-%m-%d,%H:%M", date:"$end"  } } ,
                activity : 1,
                location: 1,
                address : 1,
                user:1
            } 
        }
        
    ]

    ).exec((err, walkingdata)=>{
        
        if(err){
            return res.status(500).json({
                title: 'Error',
                error: err
            });
        }

        res.status(201).json({            
            obj: walkingdata 
        });

    });

    //NOW POPULATE USER SEPARATELY
    activityModel.populate( { user:new ObjectId(req.params.id) } , {path:"user"}, (err,res) => {        
        console.log(res);
    });


});

 
 module.exports = router;