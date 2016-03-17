'use strict'

module.exports = {
	index : function(req, reply) {
		var Book = req.models.book;

		Book.findAll({include: [{model: req.models.author}]}).then(function(book){
			reply(book);
		});
	},

	create: function(req, reply) {
		var Book = req.models.book;
		Book.create({title : req.payload.title}).then(function(books){
			books.addAuthor(req.payload.authorId);
			return reply(books);
		});
	},

	update: function(req, reply) {

	},

	remove: function(req, reply) {

	}
}