/**
 * [express description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0
 * @type {[type]}
 */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
const cors = require("cors");
const socket_io    = require( "socket.io" );

const appRoutes = require('./routes/app');
const userSignupRoutes = require('./routes/signup');
const userSigninRoutes = require('./routes/signin');
const userLocationRoutes = require('./routes/location');
const userWalkingRoutes = require('./routes/activites');
const userChatRoutes = require('./routes/chat');

const imageUpload = require('./routes/imageUpload');

var ChatMessage = require('./models/chatMessageModel');

const app = express();

var io           = socket_io();
app.io           = io;


io.on('connection', (socket) => {

    socket.on('join:room', function(chatId) {
        console.log('join room: ', chatId);
        socket.join(chatId);
    });

    socket.on('disconnect', function() {
        console.log('user left');
    });

    socket.on('send:chatmessage', function(data) {
        var newMessage = new ChatMessage();
        newMessage.chat = data.chatId;
        newMessage.message = data.message;
        newMessage.from = data.from;

        newMessage.save((err, msg) => {
            io.to(msg.chat).emit('chatmessage', msg);
        });
    });

});
// mongoose.connect('mongodb://heroku_vnc0nx9j:j09dr65ttb5t52ul7odda2fofo@ds147118.mlab.com:47118/heroku_vnc0nx9j');
 mongoose.connect('localhost:27017/social-life-tracker');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: true, credentials: true}));


/**
 * [description]
 * @author-Khondakar Readul Islam
 * @version 1.0.0
 * @param  {[type]} (req, res,          next [description]
 * @return {[type]}       [description]
 */
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS','PUT');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next();
});
app.use('/user', userSignupRoutes);
app.use('/user', userSigninRoutes);
app.use('/user', userLocationRoutes);
app.use('/user', userWalkingRoutes);
app.use('/user', userChatRoutes);
app.use('/user', imageUpload);
app.use('/', appRoutes);

// catch 404 and forwPlaceard to error handler
app.use(function (req, res, next) {
    return res.render('index');
});




module.exports = app;