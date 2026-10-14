/* Aula 29 Projeto Base de Conhecimento - Frontend: Autenticação: Token Expirado */

import axios from 'axios'

const success = res => res
const error = err => {
    if(401 === err.response.status) {
        window.location = '/'
    }else{
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)