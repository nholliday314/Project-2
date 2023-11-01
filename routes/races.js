const express = require('express');
const router = express.Router();
const passport = require('passport');
const Race = require('../models/user')

// getting all
router.get('/', async (req, res) => {
    try{
        const races = await Race.find()
        res.json(races)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

// getting one
router.get('/:id', (req, res) => {
    res.send(req.param.id)
})

// creating one
router.post('/', async (req, res) => {
    
})

// updating one (Patch vs put)
router.patch('/:id', (req, res) => {
    
})

// deleting one
router.delete('/:id', (req, res) => {
    
})



module.exports = router



// router.get('/races', indexRouter.races);
