var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('frontend/index.html')
 });

  app.get("/test", function(req, res) {
    res.end('res.end frontend/index.html');
 });

  //The 404 Route (ALWAYS Keep this as the last route)
  app.get('*', function(req, res){
    res.send('what???', 404);
  });

// app.use(function(req, res, next) {
//   if (req.url == '/') {
//     res.end("Hello");
//   } else {
//     next();
//   }
// });

// app.use(function(req, res, next) {
//   if (req.url == '/test') {
//     res.end("Test");
//   } else {
//     next();
//   }
// });

// app.use(function(req,res){
//     res.render('404.jade');
// });

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