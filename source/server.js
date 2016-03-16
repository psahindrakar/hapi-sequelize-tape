'use strict'

var Hapi = require('hapi');
var path = require('path');
var settings = require('config');
var plugins = require('./plugins');

var serverOptions = {
    connections : {
        routes : {
           cors : settings.cors
        }
    }
};

var server = new Hapi.Server(serverOptions);

server.connection({
	port : settings.port,
	host : settings.host
});

module.exports = server;

var prehandler_register = function(done) {
    server.ext('onPreHandler', function(models) {
        return function(req, reply) {
            req.models = models;
            console.log(req.models);
            reply.continue();
        }
    }(server.plugins['hapi-sequelize'].db.sequelize.models));
    done();
}

var init_database = function(done) {
    var db = server.plugins['hapi-sequelize'].db;
    db.sequelize.sync().then(function(models) {        
        console.log('Models registered');
        prehandler_register(done);
    });
};

var server_setup = function(done){
	//Register all plugins
	server.register(plugins, function (err) {
		if (err) { throw err; }
        console.log('Plugins registered');
        init_database(done);
	});
};

var server_start = function() {
    server.start(function(err) {
        if(err) throw err; 
        console.log('Server started');
        server.log('info', 'Server running at: ' + server.info.uri);
    });
};

// If someone runs: "node server.js" then automatically start the server
if (path.basename(process.argv[1],'.js') == path.basename(__filename,'.js')) {
    server_setup(function() {
        server_start();
    });
}