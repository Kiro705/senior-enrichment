'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

//Creating Campus table
module.exports = db.define('campus', {
  name: Sequelize.STRING,
})
