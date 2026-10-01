<!-- Aula 1 Projeto Base de Conhecimento - Frontend: Estrutura Inicial do Template -->
<!-- Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) -->


<template>
	<aside class="menu" v-show="isMenuVisible">
        <slot></slot>
    </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Menu",
    computed: mapState(['isMenuVisible']),
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);   
        
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
       
       
    }

</style>
