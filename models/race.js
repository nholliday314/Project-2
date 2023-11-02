const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
    name: String,
    date: String,
    distance: String,
    racePlan: [{
        runType: String,
        distance: String,
        pace: String,
        notes: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Race', raceSchema);