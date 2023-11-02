const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String
  },
  email: String,
  avatar: String, 
  raceIds: {
    type: [String]
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
