const Express = require('express');
const app = new Express();
var themeParks = require('themeparks');

app.listen(3000, () => console.log('listening'));

let disneyMagicKingdom = new themeParks.Parks.WaltDisneyWorldMagicKingdom();

app.use('/', (req, res) => {
    let times;
    disneyMagicKingdom.GetWaitTimes()
    .then(rides => {
        // times = rides.map(ride => `${ride.name} - Wait Time : ${ride.waitTime}`);
        // console.log(rideNames)
        res.send(rides);
    });
});