const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    raceDate: {
        type: Date,
        required: true
    },
    raceDate: {
        type: String,
        required: true
    }
  }, {
    timestamps: true
  });
  
  
  module.exports = mongoose.model('Race', raceSchema);