"use strict"

var controller = require('./author.controller');

module.exports = [
	{
		path : '/authors',
		method : 'GET',
		config : {
			handler : controller.index,
			description : 'List of authors',
			tags : ['public']
		}
	}
]