/* Aula 21 Projeto Base de Conhecimento - Backend: Validando Usuário Administrador */

module.exports = middleware => {
    return (req, res, next) => {
        if(req.user.admin) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador!')
        }
    }
}  