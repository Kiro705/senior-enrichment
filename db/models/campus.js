'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

//Creating Campus table
module.exports = db.define('campus', {
  name: {
	type: Sequelize.STRING,
	allowNull: false
  },
  imgURL: {
	type: Sequelize.STRING(1234),
	allowNull: false
  }
})
