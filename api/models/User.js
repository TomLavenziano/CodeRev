const crypto = require('crypto');
const bcrypt = require('bcrypt-nodejs');
const bookshelf = require('../config/bookshelf');

const User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    hidden: ['password', 'passwordResetToken', 'passwordResetExpires']
});

module.exports = User;
