'use strict'

// var routes = require('./books.routes');

exports.register = function(server, options, next) {	
	// server.route(routes);
	next();
}

exports.register.attributes = {
	name: 'Authors'
}