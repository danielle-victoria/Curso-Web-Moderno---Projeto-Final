/* Aula 8 - Projeto Base de Conhecimento - Banco de Dados Knex #01 */

// ( implementacao no versao-inicial)


const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) /* Aula 10 Projeto Base de Conhecimento - Backend: Banco de Dados Usando Knex #02 */

module.exports = knex