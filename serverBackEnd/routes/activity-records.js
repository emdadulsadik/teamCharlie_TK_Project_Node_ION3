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

router.get('/activities/:id', (req,res,next)=>{
    setWalkingModel.find(
        { 
            user:req.params.id
        }
    ).populate('user').exec((err, walkingdata)=>{

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

     
        return res.status(201).json({
            message:'Your name is registerd',
            obj: __result 
        });

    })
});