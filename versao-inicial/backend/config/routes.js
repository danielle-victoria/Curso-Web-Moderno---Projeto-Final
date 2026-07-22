/* Aula 7 Projeto Base de Conhecimento - Salvar Usuario (Estrutura)  */

// ( implementacao no versao-inicial)

/* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */
/* Aula 13 Projeto Base de Conhecimento - Backend: Desafio Obter Usuário Por ID*/

module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById) //Não será usado no sistema, mas foi implementado para fins de aprendizado
        //.delete(app.api.user.remove)    
}