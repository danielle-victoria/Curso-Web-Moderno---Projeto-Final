/* Aula 2 Projeto Base de Conhecimento - Frontend: Componente Cabeçalho */
/* Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) */
/* Aula 4 Projeto Base de Conhecimento - Frontend: Componente Menu do Usuário */
/* Aula 6 Projeto Base de Conhecimento - Frontend: Router */
/* Aula 7 Projeto Base de Conhecimento - Frontend: Componente Home */


import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
//import axios from 'axios'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJNYXJpYUAxMjMuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTc5MTMzMDc2OSwiZXhwIjoxNzkxNTg5OTY5fQ.L0pfjj7cDwNbLIWrCP0s7xw9yNoF_2CBrxwO8qnGJWA'

//axios.defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJNYXJpYUAxMjMuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTc5MTMzMDc2OSwiZXhwIjoxNzkxNTg5OTY5fQ.L0pfjj7cDwNbLIWrCP0s7xw9yNoF_2CBrxwO8qnGJWA'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')