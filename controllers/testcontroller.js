var express = require('express'); 
var router = express.Router();  
var sequelize = require('../db');
var TestModel = sequelize.import('../Models/test');

router.post('/one', function(req,res){
    res.send("Got a post Request")
});

router.post('/two', function(req, res) {
    let testData = "Test data for endpoint two";

    TestModel.create({
        testdata: testData
    })
    .then(dataFromDatabase => {
        res.send("Test two went through")
    })
});

router.post('/three', function (req, res) {
    
var testData = req.body.testdata.item; 

TestModel.create({
testdata: testData
})
res.send("Test three went through!")
console.log("Test three went through!")
});

//STEP 4 - Use this with Postman
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then( //1
        function message() { //2
         res.send("Test 4 went through!");
        }
      );
  });

  /*********************
 * Route 5: Return data in a Promise
 **********************/
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(              //1
        function message(data) {
          res.send(data);  //2
        }
      );
  });

  /*********************
 * Route 6: Return response as JSON
 **********************/
router.post('/six', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        res.json({ //1
          testdata: testdata  //2
        });
      }
    );
});

/*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
      function createError(err) { //1
        res.send(500, err.message);
      }
    );
});

router.get('/helloclient', function (req,res) {
  res.send('This is a message from the server to the client.')
})

  module.exports = router;


  //Testing that we have a route(connection)
// router.get('/', function (req, res) {

//   res.send('Hey!!! This is a test route!');
// });

//1 Pass in an object
// router.get('/contact', function (req, res) {
//     res.send({user: "kenn", email: "kenn@beastmode.com"});
//   });
  
  //2 Pass in an array
//   router.get('/projects', function (req, res) {
//     res.send(['Project 1', 'Project 2']);
//   });
  
  //3 Pass in an array of objects
//   router.get('/mycontacts', function (req, res) {
//     res.send([
//       {user: "quincy", email: "kenn@beastmode.com"},
//       {user: "aaron", email: "aaron@beastmode.com"},
//       {user: "quincy", email: "quincy@beastmode.com"},
//       {user: "tom", email: "tom@beastmode.com"}
//     ]);
//   });