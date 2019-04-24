var express = require('express'); 
var router = express.Router();  
var sequelize = require('../db');
var Ride = sequelize.import('../Models/waittimes'); 
var validateSession = require('../middleware/validatesession');

//Select * from public.logs ... to return all records in our wait times table
router.get('/', (req, res) => {
  Ride.findAll()
      .then(Ride => res.status(200).json(Ride))
      .catch(err => res.status(500).json({ error : err}))
});


//Allows users to input an actual ride wait time. 
router.post('/', validateSession, (req, res) => {
  const newInput = {
        parkname: req.body.waittime.parkname, 
        ridename: req.body.waittime.ridename,
        postedwait: req.body.waittime.postedwait,
        actualwait: req.body.waittime.actualwait,
        owner: req.user.id
  }
  Ride.create(newInput)
      .then(ride => res.status(200).json(ride))
      .catch(err => res.status(500).json({ error : err}))
});


//Get all logs for an individual user(owner as named in our table)
router.get('/mylogs', validateSession, (req, res) => {
  Ride.findAll({ where: { owner: req.user.id }})
    .then(ride => res.status(200).json(ride))
    .catch(err => res.status(500).json({ error: err}))
  })
  
  //Get individual logs by id for an individual user
  router.get('/:id', validateSession, (req, res) => {
    Ride.findOne({ where: { id: req.params.id }})
      .then(ride => res.status(200).json(ride))
      .catch(err => res.status(500).json({ error: err}))
    })
    
/*****************************
 * Allows user to update individual logs
 *****************************/
router.put('/edit/:id',validateSession, (req, res) => {
  console.log("user.id => ", req.user.id)
  Ride.update(req.body.waittime, { where: { id: req.params.id, owner: req.user.id }})
    .then(ride => res.status(200).json(ride))
    .catch(err => res.status(500).json({ error:err }))
  })

//Allows individual logs to be deleted by the user
router.delete('/:id', validateSession, (req, res) => {
  Ride.destroy({where: { id: req.params.id, owner: req.user.id}})
  .then(recChanged => res.status(200).json(recChanged))
  .catch(err => res.status(500).json({ error:err }))
})
module.exports = router;