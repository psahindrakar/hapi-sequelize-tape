"use strict";

module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("book", {
        title: DataTypes.STRING
    });

    return Book;
};