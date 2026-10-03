<!-- Aula 1 Projeto Base de Conhecimento - Frontend: Estrutura Inicial do Template -->
<!-- Aula 2 Projeto Base de Conhecimento - Frontend: Componente Cabeçalho -->
<!-- Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) -->
<!-- Aula 4 Projeto Base de Conhecimento - Frontend: Componente Menu do Usuário -->
<!-- Aula 6 Projeto Base de Conhecimento - Frontend: Router -->


<template>
	<header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            <router-link to="/">{{ title }}</router-link>   
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
	name: "Header",
    components: {
        UserDropdown
    },
    props: {     
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
            
    },
    computed: {
        icon() {
            //"fa-angle-left"
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            //this.$emit('toggle-menu')
            this.$store.commit('toggleMenu')
        }
    }   
}

</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #40a7c1);
        
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }   

    .title a:hover {
            color: #FFF;
            text-decoration: none;
        }   
    header.header > a.toggle {
       width: 60px;
       height: 100%;
       color: #FFF;
       justify-self: flex-start;
       text-decoration: none;

       display: flex;
       justify-content: center;
       align-items: center;
    }

    header.header > a.toggle:hover {
        color: #FFF;
        background: rgba(0, 0, 0, 0.2);
    }

</style>
