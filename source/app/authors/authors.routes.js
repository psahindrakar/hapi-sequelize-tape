"use strict"

var controller = require('./authors.controller.js');

module.exports = [
	{
		path : '/authors',
		method : 'GET',
		config : {
			handler : controller.index,
			description : 'List of authors',
			tags : ['public']
		}
	},
	{
		path : '/authors',
		method : 'POST',
		config : {
			handler : controller.create,
			description : 'Create author',
			tags : ['private']
		}
	}
]