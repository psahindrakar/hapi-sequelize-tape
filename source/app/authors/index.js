'use strict'

var routes = require('./authors.routes');

exports.register = function(server, options, next) {	
	server.route(routes);
	next();
}

exports.register.attributes = {
	name: 'Books'
}