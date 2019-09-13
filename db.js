
// CONFIG POSTGRES DB with Environment
const config = require('./knexfile')
const ENV = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[ENV]);

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;