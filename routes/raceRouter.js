const express = require('express');
const router = express.Router();
const passport = require('passport');
const Race = require('../models/race');
const User = require('../models/user');

router.get('/', async (req, res) => {
    console.log('races index')
    let userRaces;
    if (req?.user) {
        const { raceIds } = req?.user
        if (raceIds.length > 0) {
            const races = await Race.find({ _id: { $in: raceIds } });
            userRaces = races
        }
    }

    res.render('races/index', {
        title: 'Race Details',
        user: req.user,
        races: userRaces
    });
})

// Delete a race -> 
router.post('/delete/:raceId', async (req, res) => {
    console.log('trying to delete race')
    try {
      const { raceId } = req.params;
  
      console.log('raceId', raceId)
      // Attempt to find and delete the task by its ID
      const deletedRace = await Race.findByIdAndDelete(raceId);
  
      if (!deletedRace) {
        return res.status(404).json({ error: 'Race not found' });
      }
    res.redirect('/')
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete the race.' });
    }
});

// Create a new race and add the raceId to the user 
router.post('/createRace', async (req, res) => {
    try {
        const { name, date, distance } = req.body;
        let race;
        const newRace = new Race({
            name: name,
            date: date,
            distance: distance,
            racePlan: []
        });
        race = await newRace.save();
        // TODO: add raceId to user.raceIds
        const currentUser = req.user
        const existingUser = await User.findOne({ email: currentUser.email });
        const currRaceIds = existingUser.raceIds
        currRaceIds.push(newRace._id)
        existingUser.raceIds = currRaceIds
        await existingUser.save()
        res.locals.user = existingUser
        res.redirect('/')
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create a race.' });
    }
})

// Update a current race





module.exports = router;