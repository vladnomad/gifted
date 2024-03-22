<script setup>
	import footerIMG from "../assets/img/01/4.png"
</script>


<template>
	<footer class="footer">
		<h2 class="footer__title">
			Get to know Gifted community
		</h2>

		<img class="footer__image" :src="footerIMG" alt="" />

		<div class="footer__item footer__item--main">
			<img class="footer__item-image" src="" alt="" />
			<h3 class="footer__item-title">
				Footer Item Title
			</h3>
			<p class="footer__item-text">
				Footer Item Text
			</p>
		</div>

		<div class="footer__item footer__item--links">
			<div class="footer__item-cover"></div>
		<div class="footer__item-content">
			<p class="footer__link">
				Terms & conditions
			</p>
			<p class="footer__link">
				Privacy policy
			</p>
			<p class="footer__link">
				madebynomad.dev
			</p>
		</div>
		</div>

	</footer>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.footer {
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: calc($spacing * 2);
		grid-row-gap: calc($spacing * 2);
		width: 100%;
		margin-block: calc($spacing * 16) calc($spacing * 4);

		&__title {
			font-family: $font-display;
			font-size: 26px;
			text-wrap: balance;
		}

		&__link {
			margin-block: 0;
		}

		&__item {
			box-shadow: 0px 1px 4px -1px $color-shadow--main;

			
			border-radius: 2.5rem;
			flex-direction: column;
			align-items: flex-start;
			padding: calc($spacing * 2);
			display: flex;
			position: relative;

			&--main {
				min-height: 15rem;
            	background-color: $color-periwinkle;
			}

			&--links {
            	min-height: 10rem;
            	min-width: 10rem;
				justify-content: space-evenly;
            	background-color: $color-periwinkle;
				background-color: $color-peach;
				background-color: $color-mimosa;
            	background-color: $color-seafoam;
			}

			&-title {
				font-family: $font-display;
				font-size: 18px;
				margin: 0;
			}

			&-text {
				font-weight: 300;
				text-wrap: balance;
				margin-block: calc($spacing / 2);
			}
		}
	}

	@media screen and (min-width: 824px) {	
		.footer {
			grid-template-columns: 1fr 14rem 16rem;
			grid-template-rows: 1fr 16rem 14rem;
		}

		.footer__title {
			grid-column: 2 / span 3;
			grid-row: 1;
		}
		
		.footer__image {	
            grid-column: 1;
			grid-row: 1 / span 3;
			margin-right: calc($spacing * 4);
			margin-left: calc(calc($spacing * 2) * -1);
			min-height: 494px;
			height: 100%;
			width: auto;
		}
		
		.footer__item {	
			&--main {
				grid-column: 2 / span 2;
				grid-row: 2 / span 2;
				position: relative;
				z-index: 0;

				&::before {
					content: "";
					position: absolute;
					bottom: 16rem;
					height: 5rem;
					left: 0;
					width: 5rem;
					border-radius: 0 0 0 2.5rem;
					box-shadow: -1rem 1rem 0 0 $color-beige;
					background-color: $color-periwinkle;
				}

				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					height: 5rem;
					left: 16rem;
					width: 5rem;
					border-radius: 0 0 0 2.5rem;
					box-shadow: -1rem 1rem 0 0 $color-beige;
					background-color: $color-periwinkle;
				}
			}


			&--links {
				grid-column: 2;
				grid-row: 3;
				max-height: 10rem;
				max-width: 10rem;
				position: relative;
			}

			&-cover {
				position: absolute;
				background-color: $color-beige;
				width: calc(100% + 2rem);
				height: calc(100% + 2rem);
				top: -2rem;
				right: -2rem;
				z-index: 1;
				border-radius: 0 2.5rem 0 0;
			}

			&-content {
				position: absolute;
				background-color: $color-seafoam;
				width: calc(100% - 4rem);
				height: calc(100% - 4rem);
				right: 0;
				z-index: 2;
				border-radius: 2.5rem;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				padding: 2rem;
			}
		}
	}

	@media screen and (min-width: 1280px) {
		.footer__title {
			font-size: 2vw;
		}

		.footer__item-title {
			font-size: 1.4375vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.footer__title {
			font-size: 32px;
		}

		.footer__item-title {
			font-size: 22px;
		}
	}

	@media screen and (max-width: 824px) {	
		.footer__item {	
			min-height: 20rem;
		}
	}
</style>