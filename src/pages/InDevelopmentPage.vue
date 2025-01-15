<template>
	<div class="in-development">
		<h2 class="in-development__title">
			Page in development
		</h2>

		<p class="in-development__text">
			We're almost done, please come back later :)
		</p>

		<img
			class="in-development__image"
			:src="inDevelopmentIMG"
			alt=""
			loading="lazy"
		/>
	</div>
</template>


<script setup>
	import inDevelopmentIMG from "../assets/img/illustrations/in-development--1.webp"
</script>


<style lang="scss" scoped>
	@use "../assets/styles/variables.scss" as *;

	.in-development {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-block: calc($spacing * 4) 0;

		&__title {
			font-family: $font-display;
			font-size: 33px;
			font-weight: 600;
			text-align: center;
			margin-block: calc($spacing * 1.25) calc($spacing * .5);
		}

		&__text {
			font-weight: 300;
			text-align: center;
		}
	}

	@media screen and (min-width: 1192px) {
		.in-development {
			&__title {
				font-size: 2.773vw;
			}
		}
	}

	@media screen and (min-width: 1590px) {
		.in-development {
			&__title {
				font-size: 44px;
			}
		}
	}
</style>
