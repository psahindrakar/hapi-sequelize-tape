'use strict';

var server = require('../server');
var test = require('tape');

server.on('pluginsLoaded', function(){
	test("Test GET /authors : After fetching a list of author's", function(t) {
	    var options = {
	        method: "GET",
	        url: "/authors"
	    };
	    
	    server.inject(options, function(res) {
	        t.equal(res.statusCode, 200, 'status code should be 200');
	        server.stop(t.end);
	    });
	});

	test("Test GET /books : After fetching a list of books", function(t) {
	    var options = {
	        method: "GET",
	        url: "/books"
	    };
	    
	    server.inject(options, function(res) {
	        t.equal(res.statusCode, 200, 'status code should be 200');
	        server.stop(t.end);
	    });
	});
});