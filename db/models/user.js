'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

//Creating Student table
module.exports = db.define('student', {
  name: Sequelize.STRING,
})
