<script setup>
	import { ref, reactive, onMounted, onBeforeUnmount } from "vue"

	import welcomeImage1 from "../assets/img/01/15.png"
	import welcomeImage2 from "../assets/img/01/16.png"
	import welcomeImage3 from "../assets/img/01/24.png"
	import welcomeImage4 from "../assets/img/01/18.png"
	import welcomeImage5 from "../assets/img/01/19.png"
	import welcomeImage6 from "../assets/img/01/14.png"

	const cursorX = ref(0)
	const cursorY = ref(0)

	const transforms = reactive({
		t1: "translate(0,0)",
		t2: "translate(0,0)",
		t3: "translate(0,0)",
		t4: "translate(0,0)",
		t5: "translate(0,0)",
		t6: "translate(0,0)",
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
		transforms.t1 = transformIMG(1)
		transforms.t2 = transformIMG(2)
		transforms.t3 = transformIMG(3)
		transforms.t4 = transformIMG(4)
		transforms.t5 = transformIMG(5)
		transforms.t6 = transformIMG(6)
	}

	const transformIMG = (i) => {
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
				case 1: {
					transformX *= .5
					transformY *= .5
				}
				case 2: {
					transformX *= .875
					transformY *= .875
				}
				case 3: {
					transformX *= .8375
					transformY *= .8375
				}
				case 4: {
					transformX *= .75
					transformY *= .75
				}
				case 5: {
					transformX *= .65
					transformY *= .65
				}
				case 6: {
					transformX *= 1.75
					transformY *= 1.75
				}
				default: {
					transformX *= 10
					transformY *= 10
				}
			}
			
			return `translate(${transformX}px, ${transformY}px)`
		}
		
		return "translate(0,0)"
	}
</script>


<template>
	<section class="welcome" aria-labelledby="welcome__title">
		<div class="welcome__image-wrapper welcome__image-wrapper--1"
			:style="{ transform: transforms.t1 }">
			<img class="welcome__image welcome__image--1" :src="welcomeImage1" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--2"
			:style="{ transform: transforms.t2 }">
			<img class="welcome__image welcome__image--2" :src="welcomeImage2" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--3"
			:style="{ transform: transforms.t3 }">
			<img class="welcome__image welcome__image--3" :src="welcomeImage3" alt="">
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
			:style="{ transform: transforms.t4 }">
			<img class="welcome__image welcome__image--4" :src="welcomeImage4" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--5"
			:style="{ transform: transforms.t5 }">
			<img class="welcome__image welcome__image--5" :src="welcomeImage5" alt="">
		</div>
		<div class="welcome__image-wrapper welcome__image-wrapper--6"
			:style="{ transform: transforms.t6 }">
			<img class="welcome__image welcome__image--6" :src="welcomeImage6" alt="">
		</div>
	</section>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.welcome {
		display: grid;
		grid-template-columns: 1fr 1fr 25rem 1fr 1fr;
		grid-template-rows: repeat(3, 1fr) 5.25rem;
		height: calc(100dvh - 5.25rem);

		&__image {
			width: 8vw;
  			min-width: 9.75rem;

			&-wrapper {
				display: grid;
				width: 100%;
				height: 100%;
				transition: transform .1s ease;

				&.welcome__image-wrapper--1 {
					grid-row: 1;
					grid-column: 1 / span 2;
					justify-content: center;
					align-items: center;
					position: relative;
					top: 2vw;
				}

				&.welcome__image-wrapper--2 {
					grid-row: 2;
					grid-column: 1;
					align-items: flex-end;
					position: relative;
					left: -2vw;
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

		&__center {
			grid-row: 2;
			grid-column: 3;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			text-align: center;
		}

		&__title {
			font-family: $font-display;
			font-size: 36px;
			margin: 0;
		}

		&__text {
			margin-bottom: calc($spacing * 2);
			font-weight: 300;
		}
	}

	@media screen and (min-width: 1280px) {
		.welcome__title {
			font-size: 2.75vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.welcome__title {
			font-size: 44px;
		}
	}
</style>