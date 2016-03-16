"use strict";

module.exports = function(sequelize, DataTypes) {
  	var authors = sequelize.define("authors", {
  		id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.TEXT
		},
		age: {
			type: DataTypes.STRING
		}
	},{
        tableName: 'authors',
        timestamps: false
    });

	return authors;
};