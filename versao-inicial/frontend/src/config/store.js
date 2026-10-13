/* Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) */
/* Aula 4 Projeto Base de Conhecimento - Frontend: Componente Menu do Usuário */
/* Aula 23 Projeto Base de Conhecimento - Frontend: Autenticação: Alterando Store */

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {  
        isMenuVisible: false,
        user: null
        
        /*isMenuVisible: true,
        user: {
            name: 'Usuário Mock',
            email: 'mock@example.com'
        }*/
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(!state.user) {
                state.isMenuVisible = false
                return
            }

            if(isVisible == undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }

        },
        setUser(state, user) {
            state.user = user
            if(user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false

            }
        }
    }
})