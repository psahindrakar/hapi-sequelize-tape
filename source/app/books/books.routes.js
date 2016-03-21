"use strict"

var controller = require('./books.controller.js');

module.exports = [
	{
		path : '/books',
		method : 'GET',
		config : {
			handler : controller.show,
			description : 'List of Books',
			tags : ['public']
		}
	},
	{
		path : '/books/{id}',
		method : 'GET',
		config : {
			handler : controller.index,
			description : 'Get Book by ID.',
			tags : ['public']
		}
	},
	{
		path : '/books/{id}',
		method : 'PUT',
		config : {
			// pre: [
			// 	{method: controller.index, assign: 'books'},
			// 	{method: controller.hasAuthorization}
			// ],
			handler : controller.update,
			description : 'Updated Book details.',
			tags : ['private']
		}
	},
	{
		path : '/books/{id}',
		method : 'DELETE',
		config : {
			handler : controller.remove,
			description : 'Delete Book.',
			tags : ['private']
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