/* Aula 10 Projeto Base de Conhecimento - Backend: Banco de Dados Usando Knex #02 */


exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('parentId').references('id')
            .inTable('categories')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
};
