
var express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const url = 'mongodb://localhost:27017/cinema';
mongoose.connect(url);
const MongoClient = require('mongodb').MongoClient
, assert = require('assert');

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

});

router.get('/', function(req, res){
  res.render('index')
});

const MovieSchema=require('../Schema/movie');
//get movies
router.get('/shows',(req,res)=>{
  let Movie= mongoose.model('movies',MovieSchema);
  let movies= Movie.find({}).then((doc,err)=>{
    if(err){console.log(err)}
    else{
      res.status(200).send(doc);
    }
  })
  
})
//email

var nodemailer = require('nodemailer');


router.post('/signin',(req,res)=>{
  console.log(req.body)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cinemarkbooking@gmail.com',
      pass: 'Cinemark@123'
    }
  });
  
  var mailOptions = {
    from: 'takleakshar@gmail.com',
    to: 'shaligramjui@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})
module.exports = router;