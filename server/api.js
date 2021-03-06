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

//POST /api/campuses
api.post('/campuses', function (req, res, next) {
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(next);
})

// GET /api/students
api.get('/students', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

//POST /api/students
api.post('/students', function (req, res, next) {
	Student.create(req.body)
	.then(student => res.json(student))
	.catch(next);
})

//PUT /api/students/:studentId
api.put('/students/:studentId', function (req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body, {fields: ['firstName', 'lastName', 'campusId']}))
    .then(response => res.json(response))
    .catch(next);
})

//PUT /api/campuses/:campusId
api.put('/campuses/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body, {fields: ['name', 'imgURL']}))
    .then(response => res.json(response))
    .catch(next);
})

//DELETE /api/students/:studentId
api.delete('/students/:studentId', function (req, res, next) {
  const id = req.params.studentId;
  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

//DELETE /api/campuses/:campusId
api.delete('/campuses/:campusId', function (req, res, next) {
  const id = req.params.campusId;
  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = api
