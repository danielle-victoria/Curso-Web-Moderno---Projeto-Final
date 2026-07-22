/* Aula 7 Projeto Base de Conhecimento - Salvar Usuario (Estrutura)  */

// ( implementacao no versao-inicial)

const bcrypt = require('bcrypt-nodejs') /* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation /* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */  

    // Função para criptografar a senha do usuário
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }  
    
    
    const save = async (req, res) => {
        const user = { ...req.body } /* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */   
        if(req.params.id) user.id = req.params.id /* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */
        
        try {
            existsOrError(user.name, 'Nome não informado')      
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if(!user.id) { // se não for uma atualização, verifica se o usuário já existe no banco de dados
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
                
        } catch (msg) {
            return res.status(400).send(msg)   
        }

        user.password = encryptPassword(user.password) /* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */
        delete user.confirmPassword /* Aula 12 Projeto Base de Conhecimento - Backend: API de Usuário */

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{
            app.db('users')
                .insert(user)
                .then(_ => res.status(201).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    } 
    
    /* Aula 13 Projeto Base de Conhecimento - Backend: Desafio Obter Usuário Por ID */
    
    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById } 
}