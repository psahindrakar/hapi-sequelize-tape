const settings = require('config');

var configure_plugins = function() {
    var plugins = [
        require('../modules/authors'), 
        require('../modules/books'), 
        {
            register : require('hapi-sequelize'),
            options : settings.database
        }
    ];

    if(settings.blipp) {
        plugins.push({
            register : require('blipp')
        });
    }

    return plugins;
}

module.exports = configure_plugins();

