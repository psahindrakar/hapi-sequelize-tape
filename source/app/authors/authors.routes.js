"use strict"

var controller = require('./authors.controller.js');

module.exports = [
	{
		path : '/authors/{id}',
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
	},
	{
		path : '/authors',
		method : 'GET',
		config : {
			handler : controller.show,
			description : 'List of authors.',
			tags : ['private']
		}
	},
	{
		path : '/authors/{id}',
		method : 'PUT',
		config : {
			handler : controller.update,
			description : 'Update author info.',
			tags : ['private']
		}
	},
	{
		path : '/authors/{id}',
		method : 'DELETE',
		config : {
			handler : controller.remove,
			description : 'Delete author.',
			tags : ['private']
		}
	}
]