'use strict'

module.exports = {

	index : function(req, reply) {
		let Author = req.models.author;

		Author.findById(req.params.id).then(function(authors) {
			return reply(authors);
		});
	},

	show: function(req, reply) {
		let Author = req.models.author;

		Author.findAndCountAll().then(function(authors){
			return reply(authors);
		});
	},

	create: function(req, reply) {
		let Author = req.models.author;

		Author.create({authorname: req.payload.authorname}).then(function(author) {
			reply(author);
		});
	},

	update: function(req, reply) {
		let Author = req.models.author;

		Author.update({authorname: req.payload.authorname}, {
			where: {id: req.params.id}
		}).then(function(result) {
			if(result) return reply("Authors Updated Successfully");
				return reply("Something went wrong!!");
		});
	},

	remove: function(req, reply) {
		let Author = req.models.author;

		Author.findById(req.params.id).then(function(author){
			return author.destroy();
		}).then(function(){
			return reply("Author deleted successfully!!!");
		});
	}
}