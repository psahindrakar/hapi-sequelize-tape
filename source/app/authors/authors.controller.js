'use strict'

module.exports = {
	index : function(req, reply) {
		var Author = req.models.author;

		Author.findAll().then(function(authors){
			return reply(authors);
		});
	},

	create: function(req, reply) {
		var Author = req.models.author;

		Author.create({authorname: req.payload.authorname}).then(function(author) {
			reply(author);
		});
	},

	update: function(req, reply) {

	},

	remove: function(req, reply) {

	}
}