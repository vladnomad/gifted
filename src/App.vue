<script setup>

import HeaderComponent from "./components/HeaderComponent.vue"

</script>


<template v-if="true">

<HeaderComponent />

<main class="main">

	<section class="welcome" aria-labelledby="welcome__title">
		<h1 class="welcome__title" id="welcome__title">
			Gift swapping made simple.
		</h1>
		<p class="welcome__text">
			For the ones who love to pick for themselves.
		</p> 
		<a class="header__nav-link btn btn--filled" href="/offers">
			Search offers on Gifted
		</a>
	</section>

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