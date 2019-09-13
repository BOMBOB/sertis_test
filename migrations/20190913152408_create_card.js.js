
exports.up = function(knex) {
  return knex.schema.createTable('cards', (t) => {
      t.increments('id');
      t.string('name');
      t.string('author').index();
      t.string('content');
      t.string('category').index();
      t.string('status');
      t.timestamp('deleted_at');
      t.timestamp('restored_at');
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards')
};
