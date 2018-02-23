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
 * [UserTrackingModel]
 * @type {[type]}
 */
const UserTrackingModel = require('../models/UserTrackingModel'); 

/**
 * [description]
 * @author-Emdadul Sadik
 * @version 1.0.0 
 * @param  {[type]} '/me'      [ Get Logged in users data]
 * @param  {[type]} (req,res,next) [description]
 * @return {[type]}                [description]
 */
router.get('/me', (req,res,next)=>{

	var {google} = require('googleapis');
	var drive = google.drive('v2');

	/*var key = require('../gapi-secrets-emdadul.json');	
	var jwtClient = new google.auth.JWT(
	  key.client_email, null, key.private_key,['https://www.googleapis.com/auth/drive'], null
	);
	jwtClient.authorize(function (err, tokens) {
	  	if (err) { return res.status(200).json(err); }
		drive.files.list( { auth: jwtClient }, function (err, resp) {
	    	return res.status(200).json({
				message:'FileList Fetched!',				 
				list : resp,
				error : err 
			});
		});
	});*/

	var OAuth2 = google.auth.OAuth2;
	var oauth2Client = new OAuth2(
	  "813779838804-6orodi3pv03emm3cfr3ag9agialtj6q3.apps.googleusercontent.com",
	  "eu6iTbBXeKfWNvtGqkhueokn"
	);

	var code = "4/AADArZy5uD5Z2Vl8hJ4m25bpTZzB3RtnhyaJusdBChC-KflU7IP8mZQbn-F0Pw0moSSvsg5uwM0EHLlSnRnXILY";


	oauth2Client.getToken( code , function (err, tokens) {
	  return res.status(200).json( tokens );
	  //if (!err) { oauth2Client.setCredentials(tokens);  }
	});


	/*var drive = google.drive({
	  version: 'v2',
	  auth: oauth2Client
	});*/

	/*drive.files.list( { auth: oauth2Client }, function (err, resp) {
    	return res.status(200).json({
			message:'FileList Fetched!',				 
			list : resp,
			error : err 
		});
	});

	return res.status(200).json(drive);*/

	
});




function getAuthTokens(){

	//npm install googleapis --save

	var {google} = require('googleapis');

	var OAuth2 = google.auth.OAuth2;

	var oauth2Client = new OAuth2(
	  "813779838804-6orodi3pv03emm3cfr3ag9agialtj6q3.apps.googleusercontent.com",
	  "eu6iTbBXeKfWNvtGqkhueokn",
	  "http://localhost:5000"
	);


	/*
	IN THE CALL BELOW THE "CODE" PARAM IS EXPECTED TO COME 
	FROM "APP CONSENT SCREEN" i.e PERMISSION?AUTHORIZATION FROM USER.
	BUT WE DON'T HAVE A CONSENT SCREEN. SO I TOOK THIS CODE BELOW 
	FROM PLAYGROUND BY GIVING MY CONSENT TO THAT. 
	BUT "oauth2Client.getToken" CALL DID NOT RETURN ACCESS TOKENS!
	*/

	var code = "4/AADArZy5uD5Z2Vl8hJ4m25bpTZzB3RtnhyaJusdBChC-KflU7IP8mZQbn-F0Pw0moSSvsg5uwM0EHLlSnRnXILY";


	oauth2Client.getToken( code , function (err, tokens) {	  
	  if (!err) { oauth2Client.setCredentials(tokens);  }
	});

}


router.post('/start/:id', (req,res,next)=>{


	var __obj = {
		location : {
			start : {
				latitude: req.body.location.lat,
				longitude: req.body.location.lng
			},
			end : {}
		},
		activity : req.body.activity,
		user : req.param.id,
		start : new Date(),
		end : null	
	}


	var model = new UserTrackingModel( __obj ) ;

	model.save( (err,result)=>{

		if(err){
			return res.status(200).json({
				message: "Couldn't save in the database!",
				error : err
			});
		}

		return res.status(200).json(result);

	});


});


router.post('/end/:id', (req,res,next)=>{


	var __obj = {
		location : {
			end : {
				latitude: req.body.location.lat,
				longitude: req.body.location.lng
			}
		},		
		end : new Date()	
	};

	var __condition = { id : req.body.id, user : req.param.id };
	var __option = { multi : false };

	var model = new UserTrackingModel( ) ;

	model.update( __obj , __cond, __option, (err,result )=>{

		if(err){
			return res.status(200).json({
				message: "Couldn't update the database!",
				error : err
			});
		}

		return res.status(200).json(result);

	});


});


module.exports = router;
