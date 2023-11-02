const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Define user-related routes here
router.get('/', (req, res) => {
  // Handle GET request for users

});

router.post('/users', async (req, res) => {
try {
    const { email } = req.body;
    let user
    // TODO: find if user exists 
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        // TODO: be able to access user object in rest of application
        user = existingUser
    } else {
        // TODO: create new user
        user = new User({
            email: email,
            raceIds: []
        });
        user = await user.save();
    }
    res.status(201).json(user);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a user.' });
}
});  

module.exports = router;