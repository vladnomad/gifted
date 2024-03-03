<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue"

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
				`Gifted
			</a>
		</div>
		<nav class="header__nav">
			<div class="header__nav-links">
				<a class="header__nav-link" href="#">
					About
				</a>
				<a class="header__nav-link" href="#">
					FAQ
				</a>
				<a class="header__nav-link" href="#">
					Login
				</a>
				<a class="header__nav-link" href="#">
					Register
				</a>
			</div>
			<div v-if="isMobile" class="header__nav-menu">
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

<main id="bentogrid">
	<div id="itemlist"></div>
	<div id="paginationcontrol"></div>
</main>

<footer id="footersection"></footer>

</template>


<style lang="scss" scoped></style>