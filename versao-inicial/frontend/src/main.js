/* Aula 2 Projeto Base de Conhecimento - Frontend: Componente Cabeçalho */
/* Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) */
/* Aula 4 Projeto Base de Conhecimento - Frontend: Componente Menu do Usuário */
/* Aula 6 Projeto Base de Conhecimento - Frontend: Router */


import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')