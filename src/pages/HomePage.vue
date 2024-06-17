<template>
	<div id="home-page">
		<WelcomeSection />
		<FeatureGrid />
		<OfferList />
		<FooterComponent />
	</div>
</template>


<script setup>
	import WelcomeSection from "../components/WelcomeSection.vue"
	import FeatureGrid from "../components/FeatureGrid.vue"
	import OfferList from "../components/OfferList.vue"	
	import FooterComponent from "../components/FooterComponent.vue"	
</script>


<style lang="scss" scoped></style>
