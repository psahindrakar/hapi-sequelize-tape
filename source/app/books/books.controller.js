'use strict'

module.exports = {
	
	index : function(req, reply) {
		let Book = req.models.book;
		let Author = req.models.author;
		let exclude_associate_table = {include: [{model: Author, through: {attributes: []}}]};

		Book.findById(req.params.id, exclude_associate_table).then(function(book){
			return reply(book);
		});
	},

	create: function(req, reply) {
		let Book = req.models.book;

		Book.create({title : req.payload.title}).then(function(books){
			books.addAuthor(req.payload.authorId);
			return reply(books);
		});
	},

	show: function(req, reply) {
		let Book = req.models.book;
		let Author = req.models.author;
		let exclude_associate_table = {include: [{model: Author, through: {attributes: []}}]};

		Book.findAndCountAll(exclude_associate_table).then(function(books) {
			return reply(books);
		});
	},

	update: function(req, reply) {
		let Book = req.models.book;

		Book.update({title: req.payload.title}, {
			where: {id: req.params.id}
		}).then(function(books) {
			reply(books);
		});
	},

	remove: function(req, reply) {
		let Book = req.models.book;

		Book.findById(req.params.id).then(function(book){
			return book.destroy();
		}).then(function(){
			return reply("Book deleted successfully!!!");
		});
	},

	hasAuthorization: function(req, reply) {
		if (req.pre.article.user.id.toString() !==
			req.auth.credentials.id.toString()) {
				return reply(Boom.forbidden('User is not authorized'));
			}
		reply();
	}
}