<script setup>
	import { ref, reactive, onMounted, onBeforeUnmount } from "vue"

	import icon_1 from "../assets/img/icons/welcomeSection_1.png"
	import icon_2 from "../assets/img/icons/welcomeSection_2.png"
	import icon_3 from "../assets/img/icons/welcomeSection_3.png"
	import icon_4 from "../assets/img/icons/welcomeSection_4.png"
	import icon_5 from "../assets/img/icons/welcomeSection_5.png"
	import icon_6 from "../assets/img/icons/welcomeSection_6.png"

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

	onMounted(() => {
		window.addEventListener("mousemove", handleMouseMove)
		window.addEventListener("mousemove", handleMouseOver)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("mousemove", handleMouseMove)
		window.removeEventListener("mousemove", handleMouseOver)
	})

	const handleMouseMove = (event) => {
		cursorX.value = event.clientX
		cursorY.value = event.clientY
	}

	const handleMouseOver = () => {
		transforms.i1 = transformIcon(1)
		transforms.i2 = transformIcon(2)
		transforms.i3 = transformIcon(3)
		transforms.i4 = transformIcon(4)
		transforms.i5 = transformIcon(5)
		transforms.i6 = transformIcon(6)
	}

	const transformIcon = (i) => {
		const wrapper = document.querySelector(`.welcome__image-wrapper--${i}`)
		
		if (wrapper) {
			const rect = wrapper.getBoundingClientRect()
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
</script>


<template>
	<section class="welcome" aria-labelledby="welcome__title">
		<div class="welcome__image-wrapper welcome__image-wrapper--1" :style="{ transform: transforms.i1 }">
			<img class="welcome__image welcome__image--left welcome__image--1" :src="icon_1" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--2" :style="{ transform: transforms.i2 }">
			<img class="welcome__image welcome__image--left welcome__image--2" :src="icon_2" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--3" :style="{ transform: transforms.i3 }">
			<img class="welcome__image welcome__image--left welcome__image--3" :src="icon_3" alt="">
		</div>
			<div class="welcome__center">
			<h1 class="welcome__title" id="welcome__title">
				Gift swapping made simple.
			</h1>
			<p class="welcome__text">
				For the ones who love to pick for themselves.
			</p> 
			<a class="header__nav-link btn btn--filled" href="/offers">
				Search offers on Gifted
			</a>
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--4"
			:style="{ transform: transforms.i4 }">
			<img class="welcome__image welcome__image--right welcome__image--4" :src="icon_4" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--5"
			:style="{ transform: transforms.i5 }">
			<img class="welcome__image welcome__image--right welcome__image--5" :src="icon_5" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--6"
			:style="{ transform: transforms.i6 }">
			<img class="welcome__image welcome__image--right welcome__image--6" :src="icon_6" alt="">
		</div>
	</section>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.welcome {
		display: grid;
		/* grid-template-rows: repeat(3, 1fr) 5.25rem; */
		/* height: calc(100dvh - 5.25rem); */
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
					left: -2vw;
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
					left: -0.5vw;
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
		}

		&__text {
			margin-bottom: calc($spacing * 2);
			font-weight: 300;
		}
	}

	@media screen and (min-width: 824px) {
		.welcome {
			grid-template-columns: 1fr 1fr 25rem 1fr 1fr;
			grid-template-rows: repeat(3, 15.125rem) 5.25rem;

			&__image {
				min-width: 9.75rem;
			}

			/* RETHINK: Use mobile layout for desktop as well */

			&__center {
				grid-row: 2;
				grid-column: 3;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				text-align: center;
			}

			&__image-wrapper {
				&.welcome__image-wrapper--1 {
					grid-row: 1;
					grid-column: 1 / span 2;
					justify-content: center;
					align-items: center;
					position: relative;
					top: 1vw;
				}

				&.welcome__image-wrapper--2 {
					grid-row: 2;
					grid-column: 1;
					align-items: flex-end;
					position: relative;
					left: -1vw;
					top: -1vw;
				}

				&.welcome__image-wrapper--3 {
					grid-row: 3;
					grid-column: 2;
					align-items: flex-end;
					position: relative;
					left: -2vw;
					top: -2vw;
				}

				&.welcome__image-wrapper--4 {
					grid-row: 1;
					grid-column: 4;
					justify-content: center;
					align-items: center;
				}

				&.welcome__image-wrapper--5 {
					grid-row: 2;
					grid-column: 5;
					justify-content: flex-end;
				}

				&.welcome__image-wrapper--6 {
					grid-row: 3;
					grid-column: 4 / span 2;
					justify-content: center;
					align-items: center;
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