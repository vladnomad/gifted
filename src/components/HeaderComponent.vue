<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue"
import logoImg from "../assets/logo.svg"

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


<template>

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
				<a class="header__nav-link" href="/about">
					About
				</a>
				<a class="header__nav-link btn btn--hollow" href="/login">
					Log In
				</a>
				<a class="header__nav-link btn btn--filled" href="/join">
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

</template>

<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.header {
    grid-row: primary-header;
    grid-column: main;

	&__container {
		display: grid;
		grid-template-columns: 
			calc($spacing * 6) 
			minmax(calc($spacing * 3), auto) 
			calc($spacing * 24)
		;
	}

	&__title {
		display: flex;
		align-items: center;
		font-size: 16px;
		
		&-wrapper {
			display: flex;
			align-items: center;
		}

		&-logo {
			width: 2.5vw;
			height: auto;
			margin-right: calc($spacing / 4);
		}
	}

	&__nav {
		display: flex;
		grid-column: 3;
		gap: 1rem;
		justify-content: flex-end;
		align-items: center;

		&-links {
			display: flex;
			gap: calc($spacing * 2);
		}

		&-link {
			width: max-content;
			padding-block: calc($spacing * .75);
		}

		&-link:not(.btn) {
			padding-inline: $spacing;
		}

		&-menu {
			border-radius: 2px;
			position: relative;
			height: 14px;
			width: 20px;
		}
	}
}

.header__nav-menu-btn {
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 20px;
	cursor: pointer;

	span {
		display: block;
		width: 100%;
		box-shadow: 0 2px 6px 0 rgba(0,0,0,0.3);
		border-radius: 3px;
		height: 2px;
		background: $color-black;
		transition: all .3s;
		position: relative;
	}

	span + span {
		margin-top: 4px;
	}

	&.active span:nth-child(1) {
		animation: ease .7s top forwards;
	}

	&.not-active span:nth-child(1) {
		animation: ease .7s top-2 forwards;
	}

	&.active span:nth-child(2) {
		animation: ease .7s scaled forwards;
	}

	.not-active span:nth-child(2) {
		animation: ease .7s scaled-2 forwards;
	}

	&.active span:nth-child(3) {
		animation: ease .7s bottom forwards;
	}

	&.not-active span:nth-child(3) {
		animation: ease .7s bottom-2 forwards;
	}
}


@media screen and (min-width: 1120px) {
	.header__title {
		font-size: 1.375vw;
	}
}

@media screen and (min-width: 1590px) {
	.header__title {
		font-size: 22px;
	}
}

@media screen and (max-width: 1120px) {
	.header__title-logo {
		width: 28px;
	}
}

@media screen and (max-width: 769px) {
	.header__container {
		grid-template-columns: 
			calc($spacing * 6) 
			minmax(calc($spacing * 3), auto) 
			calc($spacing * 6)
		;
	}
}


@keyframes top {
	0% {
		top: 0;
		transform: rotate(0);
	}
	50% {
		top: 6px;
		transform: rotate(0);
	}
	100% {
		top: 6px;
		transform: rotate(45deg);
	}
}

@keyframes top-2 {
	0% {
		top: 6px;
		transform: rotate(45deg);
	}
	50% {
		top: 6px;
		transform: rotate(0deg);
	}
	100% {
		top: 0;
		transform: rotate(0deg);
	}
}

@keyframes bottom {
	0% {
		bottom: 0;
		transform: rotate(0);
	}
	50% {
		bottom: 6px;
		transform: rotate(0);
	}
	100% {
		bottom: 6px;
		transform: rotate(135deg);
	}
}

@keyframes bottom-2 {
	0% {
		bottom: 6px;
		transform: rotate(135deg);
	}
	50% {
		bottom: 6px;
		transform: rotate(0);
	}
	100% {
		bottom: 0;
		transform: rotate(0);
	}
}

@keyframes scaled {
	50% {
		transform: scale(0);
	}
	100% {
		transform: scale(0);
	}
}

@keyframes scaled-2 {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}

</style>