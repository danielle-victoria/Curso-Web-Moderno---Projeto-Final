/* Aula 22 Projeto Base de Conhecimento - Backend: API de Estatísticas (Mongo DB) */

/*const mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/knowledge', { useNewUrlParser: true }) 
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar ao MongoDB. Verifique se o serviço está ativo e se a porta 27017 está liberada.'
        console.log('\xb1[41m%s\x1b[37m', msg, '\x1b[0m')
    })*/



const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })