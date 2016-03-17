"use strict"

var controller = require('./books.controller.js');

module.exports = [
	{
		path : '/books',
		method : 'GET',
		config : {
			handler : controller.index,
			description : 'List of Books',
			tags : ['public']
		}
	},
	{
		path : '/books',
		method : 'POST',
		config : {
			handler : controller.create,
			description : 'Create Book',
			tags : ['private']
		}
	}
]