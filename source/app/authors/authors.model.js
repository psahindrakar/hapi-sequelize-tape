"use strict";

module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("author", {
        authorname: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Author.belongsToMany(models.book, {through: 'authors_books'}),
                models.book.belongsToMany(models.author, {through: 'authors_books'})
            }
        }
    });
    
    return Author;
};