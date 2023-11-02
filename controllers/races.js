const Race = require('../models/raceOld');

// controllers/race.js

  module.exports = {
    index,
    show,
    new: newRace,
    create,
    delete: deleteRace,
    edit,
    update
  };
  
  function update(req, res) {
    req.body.done = !!req.body.done;
    Race.update(req.params.id, req.body);
    res.redirect(`/races/${req.params.id}`);
  }

  function edit(req, res) {
    const race = Race.getOne(req.params.id);
    res.render('races/edit', {
      title: 'Edit Race',
      race
    });
  }

  function deleteRace(req, res) {
    Race.deleteOne(req.params.id);
    res.redirect('/races');
  }
	
  function create(req, res) {
    // The model is responsible for creating data
    Race.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/races');
  }

  function newRace(req, res) {
    res.render('races/new', { title: 'New Race' });
  }

  function show(req, res) {
      res.render('races/show', {
          todo: Race.getOne(req.params.id),
          title: 'Race Details'
      });
  }

  function index(req, res) {
    res.render('races/index', {
      races: Race.getAll(),
      title: 'Race Details'
    });
  }