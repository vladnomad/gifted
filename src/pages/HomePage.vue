<script setup>
	import HeaderComponent from "../components/HeaderComponent.vue"
	import WelcomeSection from "../components/WelcomeSection.vue"
	import FeatureGrid from "../components/FeatureGrid.vue"
	import OfferList from "../components/OfferList.vue"
	import FooterComponent from "../components/FooterComponent.vue"
</script>


<template v-if="true">
	<HeaderComponent />
	
	<main class="main">
		<WelcomeSection />
		<FeatureGrid />
		<OfferList />
		<FooterComponent />
	</main>
	
</template>


<style lang="scss" scoped></style>
