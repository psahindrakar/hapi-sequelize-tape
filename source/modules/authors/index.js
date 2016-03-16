'use strict'

var routes = require('./author.routes');

exports.register = function(server, options, next) {	
	server.route(routes);
	next();
}

exports.register.attributes = {
	name: 'Books'
}