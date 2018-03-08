//server/routes/routes.js
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
module.exports = router;