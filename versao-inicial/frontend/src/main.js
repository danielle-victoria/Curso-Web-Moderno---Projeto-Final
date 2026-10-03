/* Aula 2 Projeto Base de Conhecimento - Frontend: Componente Cabeçalho */
/* Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) */
/* Aula 4 Projeto Base de Conhecimento - Frontend: Componente Menu do Usuário */
/* Aula 6 Projeto Base de Conhecimento - Frontend: Router */
/* Aula 7 Projeto Base de Conhecimento - Frontend: Componente Home */


import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6Ikpvw6NvIiwiZW1haWwiOiJKb8Ojb0AxMjMuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE3OTA5OTA3NzQsImV4cCI6MTc5MTI0OTk3NH0.q0d2kLAUKuy1ttzZpBpRqCN0p3ulOVRqMHyuqCw6nhQ'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')