const mongoose=require('mongoose');

const MovieSchema=new mongoose.Schema({
    name:String,
    showTimes:{ type : Array , "default" : [] },
    price:Number,
    rating: Number
});

module.exports=MovieSchema;