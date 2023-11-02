const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexRouter = require("../controllers/index.js")
const Race = require('../models/race');

router.get('/', async (req, res) => {
  try {
    // TODO: use current passport user to get raceIds of current user -> if no races, return empty 
    
    if (req?.user) {
        const { raceIds } = req?.user
        if (raceIds.length > 0) {
            const races = await Race.find({ _id: { $in: raceIds } });
            res.locals.races = races
        }
    }
    res.render("index", {
      title: "Running Planner"
    });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get races.' });
}
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
