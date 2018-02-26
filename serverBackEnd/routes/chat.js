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
 * [locationModel description]
 * @type {[type]}
 */

 
var ChatGroupModel = require('../models/chatGroupModel');
var ChatMessageModel = require('../models/chatMessageModel');


/**
 * [description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0
 * @param  {[type]} '/location'                      [description]
 * @param  {[type]} (req,res,next)                 [description]
 * @param  {[type]} });		addLocation.save((err,result [description]
 * @return {[type]}                                [description]
 */
router.get('/chats', (req,res,next)=>{
        ChatGroupModel.find({},(err,chats)=>{
            if(err){
                return res.status(400).send({"msg":err});
            }
            return res.json(chats);
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
router.post('/chat', (req,res,next)=>{
    let dummyChat = new ChatGroupModel(); 
    dummyChat.name = 'General Chat'; 
    dummyChat.save(); 

    let dummyChat2 = new ChatGroupModel(); 
    dummyChat2.name = 'Ionic Chat'; 
    dummyChat2.save(); 
    
    return res.status(201).send({"success":true});
   
    
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
router.get('/chat/:id', (req,res,next)=>{

    ChatGroupModel.find({chat:req.params.id},(err,messages)=>{
        if(err){
            return res.status(400).send({"msg":err});
        }
        return res.json(messages);
    })
    
});







module.exports = router;