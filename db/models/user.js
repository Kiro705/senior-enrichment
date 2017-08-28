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
  allowNull: false
  }
}, {
  hooks: {
    beforeValidate: (student, option) => {
      let num = Math.floor(Math.random() * 100);
      let first = student.firstName;
      let last = student.lastName;
      let email = first.slice(0, 1) + last + num + '@space.edu';
      student.email = email
    }
  },
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
})
