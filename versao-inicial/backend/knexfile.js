// Update with your config settings.

/* Aula 8 - Projeto Base de Conhecimento - Banco de Dados Knex #01 */

// ( implementacao no versao-inicial)

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'senha'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };

