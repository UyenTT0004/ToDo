var express = require('express');
const dotenv =require('dotenv');
var app = express();
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
//Import routes

const userRouter= require('./routes/users');
const taskRouter= require('./routes/tasks');
//app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: false }));

//connect to db
dotenv.config();
mongoose.connect(process.env.DB_CONNECT,
   { useNewUrlParser: true });
const db =mongoose.connection
//report error if connect to db fail
db.on('error',error => console.error(error))
db.once('open',()=>console.log("connect to DB"))
//middleware
app.use(express.json())


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(__dirname + '/index.html');
})

//route middleware
app.use('/user',userRouter);
app.use('/task',taskRouter);

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("ToDo server listening at: http://localhost:%s", port)
})
