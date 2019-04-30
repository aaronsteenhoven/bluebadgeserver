const router = require('express').Router();
const themeParks = require('themeparks');


/***************************************
 * MAGIC KINGDOM-Rides I will be indexing- Space Mountain[35], 7D Mine Train[11], Peter Pan[33], Buzz Lightyear[23], Splash Mountain[36], Big Thunder Mountain[22], Winnie The Pooh[40], Barnstormer[5], Under the Sea[9], Mad Tea Party[30], Pirates[34], Haunted Mansion[38], Dumbo[25], Astro Orbiter[21]
 *************************************/
router.get('/magicKingdom', (req, res) => {
    const magicKingdom = new themeParks.Parks.WaltDisneyWorldMagicKingdom();

    let formattedRides = [];

    magicKingdom.GetWaitTimes()
        .then(rides => {
            rides.map(ride => {
                const rideObj = {
                    name : ride.name,
                    waitTime : ride.waitTime
                };

                formattedRides.push(rideObj);
            })
            // console.log(res.json(formattedRides));
            res.json(formattedRides);
        });
});


/***************************************
 * UNIVERSAL STUDIOS-Rides I will be indexing- Revenge of the Mummy[5], Escape From Gringotts  [12], ET adventure[1], Men In Black [], Transformers the Ride [8], Hollywood Rip Ride Rockit  [2], The Simpsons Ride  [7], Woody Woodpecker[9], Despicable Me[0]
 *************************************/

router.get('/universalStudios', (req, res) => {
    const universalStudios = new themeParks.Parks.UniversalStudiosFlorida();

    let universalRides = [];

    universalStudios.GetWaitTimes()
        .then(rides => {
            rides.map(ride => {
                const rideObj2 = {
                    name: ride.name,
                    waitTime: ride.waitTime
                };
                universalRides.push(rideObj2);
            })
                res.json(universalRides)
        });

});


/***************************************
 * ISLANDS OF ADVENTURE-Rides I will be indexing- Incredible Hulk Coaster[13], Flight of the Hippogriff  [5], Harry Potter and the Forbidden Journey[6], Doctor Doom's Fearfall [3], Dudley Do-Right's Ripsaw Falls [4], Storm Force Accelatron  [12], Skull Island: Reign of Kong[19], The Cat in the Hat  [2], Popeye & Bluto's Bilge-Rat Barges[9], One Fish, Two Fish, Red Fish, Blue Fish[8], Spiderman[0], Jurassic Park[7], The High in the Sky Seuss Trolley[11], Hogwarts Express[18]
 *************************************/
// router.get('/universalIslands', (req, res) => {
//     const universalIslands = new themeParks.Parks.UniversalIslandsOfAdventure();

//     let islandsRides = [];

//     universalIslands.GetWaitTimes()
//         .then(rides => {
//             rides.map(ride => {
//                 const rideObj3 = {
//                     name: ride.name,
//                     waitTime: ride.waitTime
//                 };
//                 islandsRides.push(rideObj3);
//             })
//                 res.json(islandsRides)
//         });

// });


 /***************************************
 * ANIMAL KINGDOM -Rides I will be indexing- Expedition Everest[0], Flights of Passage  [25], Kali River Rapids[43], Dinosaur [37],  Kilaminjaro Safari  [44], Navi River Journey  [24], Primeval Whirl[]
 *************************************/
// router.get('/animalkingdom', (req, res) => {
//     const animalKingdom = new themeParks.Parks.WaltDisneyWorldAnimalKingdom();

//     let akRides = [];

//     animalKingdom.GetWaitTimes()
//         .then(rides => {
//             rides.map(ride => {
//                 const rideObj4 = {
//                     name: ride.name,
//                     waitTime: ride.waitTime
//                 };
//                 akRides.push(rideObj4);
//             })
//                 res.json(animalKingdom)
//         });

// });

  /***************************************
 * HOLLYWOOD STUDIOS-Rides I will be indexing- Toy Story Mania[1], Slinky Dog  [12], Alien Swirling Saucers[13], Rockin Roller Coaster [27], Tower of Terror[29], Star Tours [28]
 *************************************/
// router.get('/hollywood', (req, res) => {
//     const hollywood = new themeParks.Parks.WaltDisneyWorldHollywoodStudios();

//     let hollywoodRides = [];

//     hollywood.GetWaitTimes()
//         .then(rides => {
//             rides.map(ride => {
//                 const rideObj5 = {
//                     name: ride.name,
//                     waitTime: ride.waitTime
//                 };
//                 hollywoodRides.push(rideObj5);
//             })
//                 res.json(hollywoodRides)
//         });

// });


module.exports = router;