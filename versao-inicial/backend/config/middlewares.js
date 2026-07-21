/* Aula 6 Projeto Base de Conhecimento - Middlewares  */

// ( implementacao no versao-inicial)


const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}
