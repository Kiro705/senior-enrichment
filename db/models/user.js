'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


//Creating Student table
module.exports = db.define('student', {
  firstName: {
	type: Sequelize.STRING,
	allowNull: false
  },
  lastName: {
	type: Sequelize.STRING,
	allowNull: false
  },
  email: {
	type: Sequelize.STRING,
	allowNull: false,
	set() {
      let num = Math.floor(Math.random() * 100);
      let first = this.getDataValue('firstName');
      let last = this.getDataValue('lastName');
      return first.slice(0, 1) + last + num + '@space.edu';
    }
  }
},{
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
})
