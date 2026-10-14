<!-- Aula 1 Projeto Base de Conhecimento - Frontend: Estrutura Inicial do Template -->
<!-- Aula 2 Projeto Base de Conhecimento - Frontend: Componente Cabeçalho -->
<!-- Aula 3 Projeto Base de Conhecimento - Frontend: Visibilidade do  Menu (Toggle) -->
<!-- Aula 23 Projeto Base de Conhecimento - Frontend: Autenticação: Alterando Store -->
<!-- Aula 26 Projeto Base de Conhecimento - Frontend: Autenticação: Validar Token #01 -->
<!-- Aula 27 Projeto Base de Conhecimento - Frontend: Autenticação: Validar Token #02 -->
<!-- Aula 31 Projeto Base de Conhecimento - Frontend: Responsividade do Menu -->

<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<Header title="Cod3r - Base de Conhecimento" 
			:hideToggle="!user"
			:hideUserDropdown="!user" />
		<Menu v-if="user"/>
		<Loading v-if="validatingToken"/>
		<Content v-else/>
		<Footer />	
	</div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, userKey } from '@/global' 
import { mapState } from 'vuex'
import Header from '@/components/template/Header'
import Menu from '@/components/template/Menu'
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'
import Loading from '@/components/template/Loading'

export default {
	name: "App",
	components: {
		Header,
		Menu,
		Content,
		Footer,
		Loading
	},
	computed: mapState(['isMenuVisible', 'user']),
	data: function() {
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if(!userData) {
				this.validatingToken = false
				this.$router.push({ name: 'auth' })
				return 
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if(res.data){
				this.$store.commit('setUser', userData)

				if(this.$mq === 'xs' || this.$mq === 'sm') {
					this.$store.commit('toggleMenu', false)
				}
			}else{
				localStorage.removeItem(userKey)
				this.$router.push({ name: 'auth' })
			}

			this.validatingToken = false
		}
	},
	created() {
		this.validateToken()
	}
}
</script>
	
<style>
	*   {
			font-family: "Lato", sans-serif;
		}
	
	body {
			margin: 0;
		}

	#app {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;

			height: 100vh;
			display: grid;
			grid-template-rows: 60px 1fr 40px;
			grid-template-columns: 300px 1fr;
			grid-template-areas:
				"header header"
				"menu content"
				"menu footer";
			
		}
	#app.hide-menu {
			grid-template-areas: 
				"header header" 
				"content content" 
				"footer footer";
		}	

</style>