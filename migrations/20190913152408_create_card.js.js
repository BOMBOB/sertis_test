
exports.up = function(knex) {
  return knex.schema.createTable('cards', (t) => {
      t.increments('id');
      t.string('name');
      t.string('author');
      t.string('content');
      t.string('category');
      t.string('status');
      t.boolean('deleted').index();
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards')
};
