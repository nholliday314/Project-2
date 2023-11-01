const express = require('express');
const router = express.Router();
const passport = require('passport');
const Race = require('../models/user')

// Require the controller that exports To-Do CRUD functions
var racesCtrl = require('../controllers/races');



// All actual paths begin with "/todos"

// GET /todos
router.get('/', racesCtrl.index);
// GET /todos/new  <-- define BEOFRE show route
router.get('/new', racesCtrl.new);
// GET /todos/:id
router.get('/:id', racesCtrl.show);
// Get /todos/:id/edit
router.get('/:id/edit', racesCtrl.edit);
// POST /todos
router.post('/', racesCtrl.create);
// DELTETE /todos/:id
router.delete('/:id', racesCtrl.delete);
// PUT /todos/:id
router.put('/:id', racesCtrl.update);

// // getting all
// router.get('/', async (req, res) => {
//     try{
//         const races = await Race.find()
//         res.json(races)
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//     }
// })

// // getting one
// router.get('/:id', (req, res) => {
//     res.send(req.param.id)
// })

// // creating one
// router.post('/', async (req, res) => {
    
// })

// // updating one (Patch vs put)
// router.patch('/:id', (req, res) => {
    
// })

// // deleting one
// router.delete('/:id', (req, res) => {
    
// })



module.exports = router



// router.get('/races', indexRouter.races);
