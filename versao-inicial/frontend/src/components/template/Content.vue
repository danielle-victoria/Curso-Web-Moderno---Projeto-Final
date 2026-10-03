<!-- Aula 1 Projeto Base de Conhecimento - Frontend: Estrutura Inicial do Template -->
<!-- Aula 6 Projeto Base de Conhecimento - Frontend: Router -->


<template>
	<div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	name: "Content",
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }

</style>

