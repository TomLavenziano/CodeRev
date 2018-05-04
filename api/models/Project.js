const bookshelf = require('../config/bookshelf');

const Project = bookshelf.Model.extend({
    tableName: 'projects',
    hasTimestamps: false,
    idAttribute: 'github_repo_id'
});

module.exports = Project;
