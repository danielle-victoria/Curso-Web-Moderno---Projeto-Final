/* Aula 10 Projeto Base de Conhecimento - Frontend: Configurando o Vue Toasted */

import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
     payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
     { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
     payload => !payload.msg ? 'Oops.. Erro inesperado. Tente novamente.' : payload.msg,
     { type: 'error', icon: 'times' }
)
