<template>
	<section
		class="welcome"
		aria-labelledby="welcome__title"
	>
		<div
			v-for="(welcomeImage, i) in welcomeImages"
			:style="{ transform: transforms[`i${i + 1}`] }"
			:class="[
				'welcome__image-wrapper',
				`welcome__image-wrapper--${i + 1}`
			]"
		>
			<img
				alt=""
				:src="welcomeImage"
				:class="[
					'welcome__image',
					`welcome__image--${i < 3 ? 'left' : 'right'}`,
					`welcome__image--${i + 1}`
				]"
			>
		</div>

		<div class="welcome__center">
			<h1 
				class="welcome__title"
				id="welcome__title"
			>
				Gift swapping made simple.
			</h1>
			<p class="welcome__text">
				For the ones who love to pick for themselves.
			</p>
			<RouterLink 
				class="header__nav-link btn btn--filled"
				to="offers"
			>
				Search offers on Gifted
			</RouterLink>
		</div>
	</section>
</template>


<script setup>
	import { ref, reactive, onMounted, onBeforeUnmount, inject } from "vue"
	import { RouterLink } from "vue-router"
	import { welcomeImages } from "../constants/homePage.js"

	const isMobile = inject("isMobile")

	const cursorX = ref(0)
	const cursorY = ref(0)

	const transforms = reactive({
		i1: "translate(0,0)",
		i2: "translate(0,0)",
		i3: "translate(0,0)",
		i4: "translate(0,0)",
		i5: "translate(0,0)",
		i6: "translate(0,0)",
	})

	const handeMouseMove = (e) => {
		transforms.i1 = transformIcon(1, e)
		transforms.i2 = transformIcon(2, e)
		transforms.i3 = transformIcon(3, e)
		transforms.i4 = transformIcon(4, e)
		transforms.i5 = transformIcon(5, e)
		transforms.i6 = transformIcon(6, e)
	}

	const transformIcon = (i, e) => {
		const wrapper = document.querySelector(`.welcome__image-wrapper--${i}`)
		
		if (wrapper && !isMobile.value && e.type !== "scroll") {
			const rect = wrapper.getBoundingClientRect()

			cursorX.value = e.clientX
			cursorY.value = e.clientY

			const offsetX = cursorX.value - rect.left
			const offsetY = cursorY.value - rect.top

			const percentX = offsetX / rect.width
			const percentY = offsetY / rect.height

			let transformX = (percentX - 0.5)
			let transformY = (percentY - 0.5)

			switch (i) {
				case 1: case 6: {
					transformX *= 1.5
					transformY *= 1.5
				}
				case 2: {
					transformX *= 1.2
					transformY *= 1.2
				}
				case 3: {
					transformX *= 1.5
					transformY *= 1.5
				}
				case 4: {
					transformX *= 1.5
					transformY *= 1.5
				}
				case 5: {
					transformX *= 2.25
					transformY *= 2.25
				}
				default: {
					transformX *= 1
					transformY *= 1
				}
			}
			
			return `translate(${transformX}px, ${transformY}px)`
		}
			
		return "translate(0,0)"
	}

	const checkMobile = () => {
		isMobile.value = window.innerWidth <= 892
	}

	onMounted(() => {
		checkMobile()
		window.addEventListener("mousemove", handeMouseMove)
		window.addEventListener("scroll", handeMouseMove)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("mousemove", handeMouseMove)
		window.removeEventListener("scroll", handeMouseMove)
	})
</script>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.welcome {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(3, 14.25rem) 5.25rem;

		&__image {
			width: 8vw;
  			min-width: 8rem;
			filter: drop-shadow(2px 2px 2px $color-shadow--drop);

			&-wrapper {
				display: grid;
				width: 100%;
				height: 100%;
				transition: transform .1s ease;

				&.welcome__image-wrapper--1 {
					grid-row: 1;
					grid-column: 2;
					justify-content: center;
					position: relative;
					top: -2vw;
				}

				&.welcome__image-wrapper--2 {
					grid-row: 1;
					grid-column: 1;
					align-items: flex-end;
					justify-content: flex-end;
					position: relative;
					left: -7vw;
					top: -3vw;
				}

				&.welcome__image-wrapper--3 {
					grid-row: 3;
					grid-column: 1;
					justify-content: flex-end;
					position: relative;
					left: -6vw;
					top: 5vw;
				}

				&.welcome__image-wrapper--4 {
					grid-row: 1;
					grid-column: 3;
					justify-content: flex-start;
					align-items: flex-end;
					position: relative;
					top: -2vw;
					left: 4vw;
				}

				&.welcome__image-wrapper--5 {
					grid-row: 3;
					grid-column: 2;
					justify-content: center;
					align-items: flex-end;
					position: relative;
					top: 5vw;
				}

				&.welcome__image-wrapper--6 {
					grid-row: 3;
					grid-column: 3;
					justify-content: flex-start;
					position: relative;
					left: 4vw;
					top: 7vw;
				}
			}
		}

		&__center {
			grid-row: 2;
			grid-column: 1 / span 3;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			text-align: center;

			max-width: 24rem;
			margin-inline: auto;
		}

		&__title {
			font-family: $font-display;
			font-size: 33px;
			margin: 0;
			text-wrap: balance;
		}

		&__text {
			margin-bottom: calc($spacing * 2);
			font-weight: 300;
		}
	}

	@media screen and (min-width: 893px) {
		.welcome {
			&__image-wrapper {
				&.welcome__image-wrapper--2 {
					top: -1vw;
				}
				&.welcome__image-wrapper--3 {
					top: 3.5vw;
				}
				&.welcome__image-wrapper--4 {
					top: 0;
				}
				&.welcome__image-wrapper--6 {
					top: 4.5vw;
				}
			}
		}
	}

	@media screen and (min-width: 1192px) {
		.welcome__title {
			font-size: 2.773vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.welcome__title {
			font-size: 44px;
		}
	}	
</style>
