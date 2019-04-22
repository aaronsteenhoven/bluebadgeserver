// include the Themeparks library
var Themeparks = require("themeparks");

// list all the parks supported by the library
for (var park in Themeparks.Parks) {
    console.log("* " + new Themeparks.Parks[park]().Name + " (DisneyAPI." + park + ")");
}

// access a specific park
var disneyMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

// access wait times by Promise
disneyMagicKingdom.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(var i=0, ride; ride=rides[i++];) {
        console.log(ride.name + ": " + ride.waitTime + " minutes wait");
    }
}, console.error);

// get park opening times
disneyMagicKingdom.GetOpeningTimes().then(function(times) {
    // print opening times
    for(var i=0, time; time=times[i++];) {
        if (time.type == "Operating") {
            console.log("[" + time.date + "] Open from " + time.openingTime + " until " + time.closingTime);
        }
    }
}, console.error);