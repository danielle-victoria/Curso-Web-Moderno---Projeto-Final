/* Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #01 */

module.exports = app => {
    const { existsOrError } = app.api.validation
    
    const save = (req, res) => {
        const article = { ...req.body }
        if(req.params.id) article.id = req.params.id

        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor não informado')
            existsOrError(article.content, 'Conteúdo não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }
        
        if(article.id) {
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id }).del()
            
            try{
                existsOrError(rowsDeleted, 'Artigo não foi encontrado')
            } catch(msg) {
                return res.status(400).send(msg)
            }
                

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }    
    }   
    
    const limit = 10 // usado para paginação // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02
    const get = async (req, res) => { // consulta de artigos com paginação // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02
        const page = req.query.page || 1 // página 1 será utilizada por padrão // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02

        const result = await app.db('articles').count('id').first() // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02
        const count = parseInt(result.count) // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02   

        app.db('articles')
            .select('id', 'name', 'description') // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02
            .limit(limit).offset(page * limit - limit) // Aula 18 Projeto Base de Conhecimento - Backend: API de Artigo #02
            .then(articles => res.json({ data: articles, count, limit })) // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString() // Aula 17 Projeto Base de Conhecimento - Backend: API de Artigo #02
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }  
    
    return { save, remove, get, getById }   
}    