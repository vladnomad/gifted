<template v-if="true">
	<HeaderComponent />
	
	<main class="main">
		<RouterView v-slot="{ Component, route }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="route.path" />
			</transition>
		</RouterView>
		
		<FooterComponent />
	</main>
	
</template>
	

<script setup>
	import { ref, onMounted, onBeforeUnmount, provide } from "vue"
	import { RouterView } from "vue-router"
	import FooterComponent from "./components/FooterComponent.vue"
	import HeaderComponent from "./components/HeaderComponent.vue"

	import "./assets/styles/variables.scss"
	import "./assets/styles/main.scss"

	const isMobile = ref(false)	

	const checkMobile = () => {
		isMobile.value = window.innerWidth <= 892
	}

	const handleResize = () => checkMobile()

	onMounted(() => {
		checkMobile()
		window.addEventListener("resize", handleResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("resize", handleResize)
	})

	provide("isMobile", isMobile)
</script>


<style lang="scss" scoped>
	.fade-enter-active, 
	.fade-leave-active {
		transition: opacity 0.3s ease-in-out;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
