/* Aula 7 Projeto Base de Conhecimento - Salvar Usuario (Estrutura)  */

// ( implementacao no versao-inicial)

/* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */
/* Aula 13 Projeto Base de Conhecimento - Backend: Desafio Obter Usuário Por ID*/

const admin = require('./admin') // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador
module.exports = app => {

    // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
    app.post('/signup', app.api.user.save) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
    app.post('/signin', app.api.auth.signin) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
    app.post('/validateToken', app.api.auth.validateToken) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação

    app.route('/users')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .post(admin(app.api.user.save)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador
        .get(admin(app.api.user.get)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador

    app.route('/users/:id')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .put(admin(app.api.user.save)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador
        .get(admin(app.api.user.getById)) //Não será usado no sistema, mas foi implementado para fins de aprendizado
        //.delete(app.api.user.remove)  
    
    /* Aula 15 Projeto Base de Conhecimento - API de Categoria #01 */
    app.route('/categories')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        //.put(app.api.category.save)
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador  
        //.delete(app.api.category.remove)

    /* Aula 16 Projeto Base de Conhecimento - Backend: API de Categoria #02 */
    // Cuidado com a ordem das rotas, pois o express lê de cima para baixo, então se colocar a rota /categories/:id antes da rota /categories, o express vai entender que o id é uma categoria e não vai conseguir acessar a rota /categories.

    app.route('/categories/tree')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .get(app.api.category.getTree)

    /* Aula 15 Projeto Base de Conhecimento - API de Categoria #01 */
    app.route('/categories/:id')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .get(app.api.category.getById)
        .put(admin(app.api.category.save)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador
        .delete(admin(app.api.category.remove)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador


    /* Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #01 */
    app.route('/articles')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .get(admin(app.api.article.get))    // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador  
        .post(admin(app.api.article.save)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador
       

    app.route('/articles/:id')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .get(app.api.article.getById)
        .put(admin(app.api.article.save)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador    
        .delete(admin(app.api.article.remove)) // Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador


    /* Aula 18 Projeto Base de Conhecimento - Backend: API de Artigo #02 */
    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate()) // Aula 20 Projeto Base de Conhecimento - Backend: Protegendo a API com Passport
        .get(app.api.article.getByCategory)
}