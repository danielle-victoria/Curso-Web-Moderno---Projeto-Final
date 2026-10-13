/* Aula 6 Projeto Base de Conhecimento - Frontend: Router */
/* Aula 17 Projeto Base de Conhecimento - Frontend: Artigos Por Categoria #01 */
/* Aula 19 Projeto Base de Conhecimento - Frontend: Exibir Artigo */
/* Aula 24 Projeto Base de Conhecimento - Frontend: Autenticação: Tela de Login/Cadastro */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}, {
    name: 'articleByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}]

export default new VueRouter({
    mode: 'history',
    routes
})

 