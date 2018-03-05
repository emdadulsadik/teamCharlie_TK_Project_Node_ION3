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
router.post('/start/:id/:startpoint/:activity', (req,res,next)=>{
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
                    lat:  req.body.location.lat,
                    lng:  req.body.location.lng
                 },
                 end: {
                     lat: '',
                     lng:  '',
                 }
                    
             },     
             startpoint: req.params.startpoint,
             endpoint: '',          
             activity: req.params.activity,
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
                 setActivitiesID: result._id,
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
router.patch('/end/:id/:endpoint',(req,res,next)=>{
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
                },
        walkingdata.endpoint = req.params.endpoint, 
  
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
router.get('/walkinglist/:id', (req,res,next)=>{
    activityModel.find({user:req.params.id,  activity : 'walking'})
    .populate('user')
    .exec((err, walkingdata)=>{
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
            obj:walkingdata
        });

    })
});


/**
 * [description]
 * @version 1.0.0
 * @author-Khondakar Readul Islam
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
router.get('/cyclinglist/:id', (req,res,next)=>{
    activityModel.find({user:req.params.id,  activity : 'cycling'})
    .populate('user')
    .exec((err, walkingdata)=>{
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
            obj:walkingdata
        });

    })
});



/**
 * [description]
 * @version 1.0.0
 * @author-Khondakar Readul Islam 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
router.get('/drivinglist/:id', (req,res,next)=>{
    activityModel.find({user:req.params.id,  activity : 'driving'})
    .populate('user')
    .exec((err, walkingdata)=>{
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
            obj:walkingdata
        });

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
router.get('/singleWalkingInfo/:id', (req,res,next)=>{
    activityModel.find({_id:req.params.id,  activity : 'walking'})
    .exec((err, walkingdata)=>{
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
            obj:walkingdata
        });

    })
});




 
 module.exports = router;