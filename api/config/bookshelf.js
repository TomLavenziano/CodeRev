const config = require('../knexfile');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);
const upsert = require('bookshelf-upsert');

bookshelf.plugin('virtuals');
bookshelf.plugin('visibility');
bookshelf.plugin(upsert);

knex.migrate.latest();

module.exports = bookshelf;
