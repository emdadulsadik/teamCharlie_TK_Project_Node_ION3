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
const setWalkingModel = require('../models/setWalkingModel');
const UserSignInModel = require('../models/usersModel'); 


router.get('/allwalkingdata/:id', (req,res,next)=>{
    setWalkingModel.find({user:req.params.id})
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
            obj: walkingdata 
        });

    })
});




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

         var addLocation = new setWalkingModel({
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
             user.setwalking.push(result);
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




//  router.post('/end/:id', (req,res,next)=>{
    

//     setWalkingModel.findById(req.params.id, (err, setWalk )=>{


//           /**
//           * [if description]
//           * @param  {[type]} err [description]
//           * @return {[type]}     [description]
//           */
//          if(err){
//              return res.status(500).json({
//                  title: 'Error',
//                  error: err
//              });5a92b9feff65be147b9728b7
//          }         
         
//          var __data = {

//              location : {
//                 start : setWalk.location.start,
//                  end : {
//                     lat: req.body.location.lat,
//                     lng: req.body.location.lng
//                  }                    
//              },          
             
//              end : Date()
//          };



//          var __condition = { 
//             _id : req.params.id
//          };

//          var __option = { multi : false };

//          setWalk.location.end = {
//             lat: req.body.location.lat,
//             lng: req.body.location.lng
//          }

//         setWalk.end = Date();
         

//         setWalk.save();
 

//         return res.status(200).json( setWalk );

         
//     });
         
             
// });


/**
 * [description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0 
 * @param  {[type]}   'passUpdate/:id' [description]
 * @param  {Function} (req,res,next)   [description]
 * @return {[type]}                    [description]
 */
router.patch('/end/:id',(req,res,next)=>{
	setWalkingModel.findById(req.params.id,(err,walkingdata)=>{
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



// router.get('/walkinglist/:id', (req,res,next)=>{

//     setWalkingModel.find( { user: req.params.id , activity : 'walking' } , (err, getWalkList )=>{

//         var __result = [] ;

//         getWalkList.forEach( element => { 

            

//             element['distance'] = getDistanceFromLatLonInKm(
//                 element.location.start.lat,
//                 element.location.start.lng,
//                 element.location.end.lat,
//                 element.location.end.lng

//             ); 


//             __result.push( element );

            
//         });


//         return res.status(200).json( __result );


//     });
 
    
// });



router.get('/walkinglist/:id', (req,res,next)=>{
    setWalkingModel.find({user:req.params.id,  activity : 'walking'})
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

        var __result = [] ;

        walkingdata.forEach( element => { 

            

            element['distance'] = getDistanceFromLatLonInKm(
                element.location.start.lat,
                element.location.start.lng,
                element.location.end.lat,
                element.location.end.lng

            ); 


            __result.push( element );

            
        });

          /**
         * [message description]
         * @type {String}
         */
        res.status(201).json({
            message:'Your name is registerd',
            obj: __result 
        });

    })
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}
 
 
 module.exports = router;