/* Aula 7 Projeto Base de Conhecimento - Salvar Usuario (Estrutura)  */

// ( implementacao no versao-inicial)



module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
}