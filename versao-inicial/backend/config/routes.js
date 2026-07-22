/* Aula 7 Projeto Base de Conhecimento - Salvar Usuario (Estrutura)  */

// ( implementacao no versao-inicial)

/* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */

module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        //.get(app.api.user.getById)
        //.delete(app.api.user.remove)    
}