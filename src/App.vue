<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue"
import logoImg from "./assets/logo.svg"

const logo = logoImg

const isActive = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
	isActive.value = !isActive.value
}

const checkMobile = () => {
	isMobile.value = window.innerWidth <= 768
}

const handleResize = () => {
	checkMobile()
}

onMounted(() => {
	checkMobile()
	window.addEventListener("resize", handleResize)
})

onBeforeUnmount(() => {
	window.removeEventListener("resize", handleResize)
})

</script>


<template v-if="true">

<header class="header">
	<div class="header__container">
		<div class="header__title-wrapper">
			<a class="header__title" href="#">
				<img class="header__title-logo" :src=logo alt="">
				Gifted
			</a>
		</div>
		<nav class="header__nav">
			<div v-if="!isMobile" class="header__nav-links">
				<a class="header__nav-link" href="#">
					About
				</a>
				<a class="header__nav-link btn btn--hollow" href="#">
					Log In
				</a>
				<a class="header__nav-link btn btn--filled" href="#">
					Join Now
				</a>
			</div>
			<div v-else class="header__nav-menu">
				<div @click="toggleMenu" :class='{ 
					"header__nav-menu-btn": true, 
					"active": isActive, 
					"not-active": !isActive 
				}'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nav>
	</div>
</header>

<main class="main">
	<section aria-labelledby="welcome__title" class="welcome">
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
	<div class="bento">
		<h2 class="bento__title">
			Explore ways to help yourself & others.
		</h2>
		<div class="bento__node bento__node--1">
			<div class="bento__node-image"></div>
			<div class="bento__node-title"></div>
			<div class="bento__node-text"></div>
		</div>
		<div class="bento__node bento__node--2">
			<div class="bento__node-image"></div>
			<div class="bento__node-title"></div>
			<div class="bento__node-text"></div>
		</div>
		<div class="bento__node bento__node--3">
			<div class="bento__node-image"></div>
			<div class="bento__node-title"></div>
			<div class="bento__node-text"></div>
		</div>
		<div class="bento__node bento__node--4">
			<div class="bento__node-image"></div>
			<div class="bento__node-title"></div>
			<div class="bento__node-text"></div>
		</div>
	</div>
	<div id="selected-offers"></div>
	<div id="pagination"></div>
</main>

<footer></footer>

</template>


<style lang="scss" scoped></style>