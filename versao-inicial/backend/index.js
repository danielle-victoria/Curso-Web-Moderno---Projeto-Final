/* Aula 4 Projeto Base de Conhecimento - Backend: Configurar Projeto */

/* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */

const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})