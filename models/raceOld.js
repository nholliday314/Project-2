const races = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];

// const races = [
//     {id: 125223, raceName: 'CIM', location: 'Sacramento, CA', distance: 'Marathon', raceDate: '12/03/23'},
//     {id: 127904, raceName: 'Seattle Marathon', location: 'Seattle, WA', distance: 'Marathon', raceDate: '11/24/23'},
//   ];


	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, updatedRace) {
    id = parseInt(id);
    const race = races.find(race => race.id === id);
    Object.assign(race, updatedRace);
  }
 
  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = races.findIndex(race => race.id === id);
    races.splice(idx, 1);
  }

	function create(race) {
    // Add the id
    race.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    race.done = false;
    races.push(race);
  }

  function getOne(id) {
    id = parseInt(id);
    return races.find(race => race.id === id);
  }


  function getAll() {
    return races;
  }




// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const raceSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     distance: {
//         type: String,
//         required: true
//     },
//     raceDate: {
//         type: Date,
//         required: true
//     },
//     raceDate: {
//         type: String,
//         required: true
//     }
//   }, {
//     timestamps: true
//   });
  
  
//   module.exports = mongoose.model('Race', raceSchema);