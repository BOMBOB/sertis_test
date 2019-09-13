const bookshelf = require('../db');
const _ = require('lodash');
const Card = bookshelf.Model.extend({
    tableName: 'cards', 
    soft: true,
    toJSON() {
        return _.omit(this.serialize(), ['restored_at','created_at', 'deleted_at', 'updated_at'])
    }
})


module.exports = Card;