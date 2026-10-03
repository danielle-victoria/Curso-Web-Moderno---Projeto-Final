/* Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) */
/* Aula 4 Projeto Base de Conhecimento - Frontend: Componente Menu do Usuário */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {    
        isMenuVisible: true,
        user: {
            name: 'Usuário Mock',
            email: 'mock@example.com'
        }
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(isVisible == undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }

        }
    }
})