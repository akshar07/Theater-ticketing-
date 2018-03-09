//server/server.js
var express = require('express');

var router = require('./routes/routes.js')
var path = require('path');
var passport = require('passport')
const facebook=require('./config');
import FacebookStrategy from 'passport-facebook';
// process fb data
const transformFacebookProfile = (profile) => ({
  name: profile.name,
  avatar: profile.picture.data.url,
});
//register fb strategy
passport.use(new FacebookStrategy(facebook,
  // Gets called when user authorizes access to their profile
  async (accessToken, refreshToken, profile, done)
    // Return done callback and pass transformed user object
    => done(null, transformFacebookProfile(profile._json))
));

// Serialize user into the sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);
app.use(passport.initialize());
app.use(passport.session());



app.enable('trust proxy');
// const express_enforces_ssl = require('express-enforces-ssl');
// app.use(express_enforces_ssl());
//
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {successRedirect : '/', failureRedirect: '/auth/facebook' }),
    // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
    );


module.exports=app;