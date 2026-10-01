/* Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {    
        isMenuVisible: false
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(isVisible == undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }

            console.log('toggleMenu: ' + state.isMenuVisible)
        }
    }
})