const express = require('express');
const app = express();
const dotenv =require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

// set up view engine
app.set('view engine','ejs');
app.set('views', __dirname+'/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'))
//Import routes
const indexrouter =require('./routes/index');
const userRouter= require('./routes/users');
const taskRouter= require('./routes/tasks');

app.use(bodyParser.urlencoded({limit: '10mb',extended: false}) );

//connect to db
dotenv.config();
mongoose.connect(process.env.DB_CONNECT,
   { useNewUrlParser: true });
const db =mongoose.connection
//report error if connect to db fail
db.on('error',error => console.error(error))
db.once('open',()=>console.log("connect to DB!"));

//middleware
app.use(express.json());

//route middleware
app.use('/',indexrouter);
app.use('/user',userRouter);
app.use('/task',taskRouter);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("ToDo server listening at: http://localhost:%s", port)
})
