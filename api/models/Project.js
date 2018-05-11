const bookshelf = require('../config/bookshelf');

const Project = bookshelf.Model.extend({
    tableName: 'projects',
    hasTimestamps: false,
    idAttribute: 'id'
});

module.exports = Project;
