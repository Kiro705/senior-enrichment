'use strict'
const api = require('express').Router()
const db = require('../db')
const { Campus, Student } = require('../db/models');

//test route
// GET /api/hello
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// GET /api/campuses
api.get('/campuses', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campuses/:campusId
api.get('campuses/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

module.exports = api
