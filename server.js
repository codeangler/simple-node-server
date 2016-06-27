// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs')
var router = express.Router()

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));





// Routes \\
app.get('/', function(req, res){
  fs.readFile('data.txt', function(err, data){
    if(err){
      console.error(err)
    }
    console.log(data)
    
    res.header('Content-Type', 'text/html');
    res.send(data)
  })
})


// bonus route
// router.use((logger()))
// router.use(express.static(__dirname + '/public/otherfiles'))
// router.use(function (req, res) {
//   console.log('hello')
// })


// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})