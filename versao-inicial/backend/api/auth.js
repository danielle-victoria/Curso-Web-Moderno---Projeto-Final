/* Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação */

const { authSecret } = require('../.env') // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
const jwt = require('jwt-simple') // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação    
const bcrypt = require('bcrypt-nodejs') // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        } 

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()
            
        if(!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
        if(!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
        
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
            exp: now + (60 * 60 * 24 * 3) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
        }    

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
        }) 
    }  

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret) // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
                if(new Date(token.exp * 1000) > new Date()) { // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
                    return res.send(true)
                }
            }  
        } catch(e) {
            // Problema com o token
        }

        res.send(false)
    } 

    return { signin, validateToken } // Aula 19 Projeto Base de Conhecimento - Backend: API de Autenticação
}
