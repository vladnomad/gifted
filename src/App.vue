<script setup>
	import { ref, onMounted, onBeforeUnmount, provide } from "vue"

	import HeaderComponent from "./components/HeaderComponent.vue"
	import WelcomeSection from "./components/WelcomeSection.vue"
	import FeaturesGrid from "./components/FeaturesGrid.vue"
	import OffersList from "./components/OffersList.vue"
	import FooterComponent from "./components/FooterComponent.vue"

	const isMobile = ref(false)

	const checkMobile = () => {
		isMobile.value = window.innerWidth <= 823
	}

	const handleResize = () => checkMobile()

	onMounted(() => {
		checkMobile()
		window.addEventListener("resize", handleResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("resize", handleResize)
	})

	provide("isMobile", isMobile);
</script>


<template v-if="true">
	<HeaderComponent />
	
	<main class="main">
		<WelcomeSection />
		<FeaturesGrid />
		<OffersList />
		<FooterComponent />
	</main>
	
</template>


<style lang="scss" scoped></style>