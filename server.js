var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('frontend/index.html')
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + req.params[0]); 
 });

 var port = 3000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });;

var open = require("open");
open("http://127.0.0.1:3000");