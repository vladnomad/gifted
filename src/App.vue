<script setup>

import HeaderComponent from "./components/HeaderComponent.vue"
import WelcomeSection from "./components/WelcomeSection.vue"

</script>


<template v-if="true">

<HeaderComponent />

<main class="main">

	<WelcomeSection />

	<section class="bento" aria-labelledby="bento__title">
		<h2 class="bento__title" id="bento__title">
			Explore ways to help yourself & others.
		</h2>
		<article class="bento__node bento__node--1">
			<img class="bento__node-image">
			<h3 class="bento__node-title"></h3>
			<p class="bento__node-text"></p>
		</article>
		<article class="bento__node bento__node--2">
			<img class="bento__node-image">
			<h3 class="bento__node-title"></h3>
			<p class="bento__node-text"></p>
		</article>
		<article class="bento__node bento__node--3">
			<img class="bento__node-image">
			<h3 class="bento__node-title"></h3>
			<p class="bento__node-text"></p>
		</article>
		<article class="bento__node bento__node--4">
			<img class="bento__node-image">
			<h3 class="bento__node-title"></h3>
			<p class="bento__node-text"></p>
		</article>
	</section>

	<div id="selected-offers"></div>
	
	<div id="pagination"></div>

</main>

<footer></footer>

</template>


<style lang="scss" scoped></style>