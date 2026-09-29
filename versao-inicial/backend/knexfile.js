// Update with your config settings.

const { db } = require('./.env') /*Aula 25 Projeto Base de Conhecimento - Backend: Informações de Conexão  no .env  */

/* Aula 8 - Projeto Base de Conhecimento - Banco de Dados Knex #01 */

// ( implementacao no versao-inicial)

module.exports = {

    client: 'postgresql',
    /*connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'senha'*/
      connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };

