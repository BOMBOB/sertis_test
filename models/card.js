const bookshelf = require('../db');

const Card = bookshelf.Model.extend({
    tableName: 'cards', 
})


module.exports = Card;