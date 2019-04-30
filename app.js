require('dotenv').config();

var express = require('express'); 
var app = express(); 
var user = require('./controllers/usercontroller')
var waittimes = require('./controllers/waittimescontroller')
// var magicKingdom = require('./controllers/parksController');
var parks = require('./controllers/parksController');

var sequelize = require('./db');
var bodyParser = require('body-parser');
var themeParks = require('themeparks');



sequelize.sync(); // tip: {force: true} for resetting tables



app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/user', user);

app.use('/waittimes', waittimes);

// app.use('/themeParks', themeParks);

app.use('/parks', parks);

// app.use('/magicKingdom', magickingdom)

// app.use('/universalStudios', universal)



app.listen(process.env.PORT, function(){
    console.log('App is listening on 3000') 
});