require('dotenv').config();

var express = require('express'); 
var app = express(); 
var user = require('./controllers/usercontroller')
var waittimes = require('./controllers/waittimescontroller')
// var vote = require('./controllers/votecontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');
var themeParks = require('themeparks');
// var magickingdom = require('magickingdom');
// var universal = require('universal');


sequelize.sync(); // tip: {force: true} for resetting tables



app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/user', user);

app.use('/waittimes', waittimes);

// app.use('/themeParks', themeParks);

// app.use('/magickingdom', magickingdom)

// app.use('/magickingdom', universal)

// app.use('/vote', vote);

app.listen(process.env.PORT, function(){
    console.log('App is listening on 3000') 
});