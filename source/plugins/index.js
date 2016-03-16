const settings = require('config');

module.exports = [
    //set up good to log every kind of event. Change according to your needs.
    // {
    //     register:require('good'),
    //     options:{
    //         reporters: [{
    //             reporter: require('good-console'),
    //             // args:[{ log: '*', request: '*', ops: '*', error: '*' }]
    //             events: { response: Config.log.options.events, request: '*', log: '*', error: '*', ops: '*'}
    //         }]
    //     }
    // },
    require('../modules/authors'), 
    require('../modules/books'), 
    {
        register : require('hapi-sequelize'),
        options : settings.database
    }
];