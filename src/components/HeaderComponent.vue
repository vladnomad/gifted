<script setup>
	import { ref, inject } from "vue"

	import LogoSVG from "../assets/svg/LogoSVG.vue"
	import UserSVG from "../assets/svg/UserSVG.vue"

	const isActive = ref(false)
	const isMobile = inject("isMobile")

	const toggleMenu = () => {
		isActive.value = !isActive.value
	}
</script>


<template>
	<header class="header">
		<div class="header__container">
			<div class="header__title-wrapper">
				<a class="header__title" href="/gifted">
					<LogoSVG />
					Gifted
				</a>
			</div>
			<nav class="header__nav">
				<div v-if="!isMobile" class="header__nav-links">
					<a href="about">
						About
					</a>
					<a class="header__nav-login" href="login">
						<UserSVG />
					</a>
					<a class="btn btn--filled" href="join">
						Join Now
					</a>
				</div>
				<div v-else class="header__nav-menu">
					<div @click="toggleMenu" :class='{ 
						"header__nav-menu_btn": true, 
						"active": isActive, 
						"not-active": !isActive 
					}'>
						<span v-for="i in 3" 
							:key="'header__nav-menu_btn_span--' + i">
						</span>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";
	@import "../assets/styles/keyframes.css";

	.header {
		position: sticky;
		top: 1.25rem;
		z-index: 1;
		grid-row: primary-header;
		grid-column: main;

		&__container {
			display: grid;
			min-height: 40px;
			width: calc(100dvw - 5rem);
			grid-template-columns: 
				calc($spacing * 6) 
				minmax(calc($spacing * 3), auto) 
				calc($spacing * 24)
			;
		}

		&__title {
			display: flex;
			align-items: center;
			font-size: 17px;
			
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
				align-items: center;
			}

			&-login {
				display: flex;
			}
			
			&-menu {
				border-radius: 2px;
				position: relative;
				height: 14px;
				width: 20px;
			}
		}
	}

	.header__nav-menu_btn {
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

		&.not-active span:nth-child(1) {
			animation: ease .7s headerComponent_10 forwards;
		}

		&.active span:nth-child(1) {
			animation: ease .7s headerComponent_11 forwards;
		}

		.not-active span:nth-child(2) {
			animation: ease .7s headerComponent_20 forwards;
		}

		&.active span:nth-child(2) {
			animation: ease .7s headerComponent_21 forwards;
		}

		&.not-active span:nth-child(3) {
			animation: ease .7s headerComponent_30 forwards;
		}

		&.active span:nth-child(3) {
			animation: ease .7s headerComponent_31 forwards;
		}
	}

	.logo-svg,
	.user-svg {
		width: 21px;
		height: auto;
	}

	.logo-svg {
		margin-top: -3px;
		margin-right: 3px;
	}

	@media screen and (min-width: 1238px) {
		.header__title {
			font-size: 1.375vw;
		}
		.logo-svg,
		.user-svg {
			width: 1.6875vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.header__title {
			font-size: 22px;
		}
		.logo-svg,
		.user-svg {
			width: 26px;
		}
	}
	
	@media screen and (max-width: 824px) {
		.header__container {
			grid-template-columns: 
				calc($spacing * 6) 
				minmax(calc($spacing * 3), auto) 
				calc($spacing * 6)
			;
		}
	}
</style>