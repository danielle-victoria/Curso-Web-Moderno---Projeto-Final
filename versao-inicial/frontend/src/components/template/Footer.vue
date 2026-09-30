<!-- Aula 1 Projeto Base de Conhecimento - Frontend: Estrutura Inicial do Template -->

<template>
	<footer class="footer">
        <span>Copyright © 2015-2026 - Todos os direitos reservados <strong>Cod3r</strong></span>
    </footer>
</template>

<script>
export default {
	name: "Footer",
}
</script>

<style>
    .footer {
        grid-area: footer;
        background: #DDD;   
        color: #333;  

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
       
    }

</style>
