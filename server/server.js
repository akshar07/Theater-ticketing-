//server/server.js
var express = require('express');

var router = require('./routes/routes.js')
var path = require('path');
var app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);
// app.listen(port, (err) => {  
//     if (err) {
//       return console.log('something bad happened', err);
//     }
//     console.log(`server is listening on ${port}`);
//   });

module.exports=app;