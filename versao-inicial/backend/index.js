/* Aula 4 Projeto Base de Conhecimento - Backend: Configurar Projeto */

/* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */

const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose') /* Aula 22 Projeto Base de Conhecimento - Backend: API de Estatísticas (Mongo DB) */

require('./config/mongodb') /* Aula 22 Projeto Base de Conhecimento - Backend: API de Estatísticas (Mongo DB) */


app.db = db
app.mongoose = mongoose /* Aula 22 Projeto Base de Conhecimento - Backend: API de Estatísticas (Mongo DB) */

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule') /* Aula 23 Projeto Base de Conhecimento - Backend: Integrando Bancos com Scheduler */  
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})