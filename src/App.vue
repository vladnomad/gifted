<script setup>

import HeaderComponent from "./components/HeaderComponent.vue"
import WelcomeSection from "./components/WelcomeSection.vue"
import FeaturesGrid from "./components/FeaturesGrid.vue"

</script>


<template v-if="true">

	<HeaderComponent />
	<main class="main">

		<WelcomeSection />
		<FeaturesGrid />

		<div id="selected-offers"></div>
		<div id="pagination"></div>

	</main>
	<footer></footer>

</template>


<style lang="scss" scoped></style>