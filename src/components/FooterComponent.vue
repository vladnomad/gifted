<script setup>
	import footerIMG from "../assets/img/01/4.png"
	import FooterSVG from "../assets/FooterSVG.vue"
	import InstagramSVG from "../assets/InstagramSVG.vue"
	import FacebookSVG from "../assets/FacebookSVG.vue"
</script>


<template>
	<footer class="footer">
		<h2 class="footer__title">
			Get to know Gifted community
		</h2>

		<img class="footer__image" :src="footerIMG" alt="" />
		
		<div class="footer__info-bg">
			<FooterSVG />
		</div>

		<div class="footer__info">
			<img class="footer__info-image" src="" alt="" />
			<h3 class="footer__info-title">
				Footer Item Title
			</h3>
			<p class="footer__info-text">
				Footer Item Text
			</p>
		</div>

		<div class="footer__social">
			<a class="footer__social-link">
				<InstagramSVG />
				<p class="footer__social-label footer__social-label--instagram">
					Instagram
				</p>
			</a>
			<a class="footer__social-link">
				<FacebookSVG />
				<p class="footer__social-label footer__social-label--facebook">
					Facebook
				</p>
			</a>
		</div>

		<div class="footer__links">
			<p class="footer__link">
				Terms & Conditions
			</p>
			<p class="footer__link">
				Privacy Policy
			</p>
			<p class="footer__link">
				madebynomad.dev
			</p>
		</div>

	</footer>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.facebook-svg, 
	.instagram-svg {
		width: calc($spacing * 4);
		height: calc($spacing * 4);
		transition: transform .25s ease;
	}

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
			font-weight: 500;
			top: -4px;
			position: relative;
		}

		&-svg {
			width: 100%;
			height: 100%;
			filter: drop-shadow(1px 1px 1px $color-shadow--drop) ;
		}

		&__links {
			box-shadow: 0px 1px 4px -1px $color-shadow--box;

			border-radius: 2.5rem;
			flex-direction: column;
			align-items: flex-start;
			padding: calc($spacing * 2);
			display: flex;

			min-height: 10rem;
			min-width: 10rem;
			justify-content: space-evenly;
			background-color: $color-seafoam;
		}

		&__link {
			margin-block: 0;
			font-weight: 300;
		}

		&__info {			
			border-radius: 2.5rem;
			flex-direction: column;
			align-items: flex-start;
			padding: calc($spacing * 2);
			display: flex;

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

		&__social {	
			grid-column: 3;
			grid-row: 3;
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			align-items: center;
			padding-inline: calc($spacing * 2);
			padding-block: 0 calc($spacing * 2);
			margin-top: calc($spacing * -1);

			&-link {
				width: 100%;
				height: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
			}

			&-label {
				font-weight: 300;
				opacity: 0;
				z-index: -1;
				position: absolute;
				transition: 
					opacity .25s ease,
					transform .25s ease
				;

				&--instagram {
					transform: translateX(65px);
				}

				&--facebook {
					transform: translateX(-65px);
				}
			}
		}
	}

	@media screen and (min-width: 824px) {	
		.footer {
			grid-template-columns: 1fr 14rem 16rem;
			grid-template-rows: 1fr 16rem 14rem;

			&__title {
				grid-column: 2 / span 3;
				grid-row: 1;
			}
			
			&__image {	
				grid-column: 1;
				grid-row: 1 / span 3;
				margin-right: calc($spacing * 5);
				margin-left: calc(calc($spacing * 2) * -1);
				min-height: 494px;
				height: 100%;
				width: auto;
			}

			&__links {
				grid-column: 2;
				grid-row: 3;
				max-height: 10rem;
				max-width: 10rem;
			}
			
			&__info-bg {	
				grid-column: 2 / span 2;
				grid-row: 2 / span 2;
				position: relative;
				z-index: -1;
			}
			
			&__info {	
				grid-column: 2 / span 2;
				grid-row: 2;
			}
			
			&__social {	
				grid-column: 3;
				grid-row: 3;

				&-link:hover {
					& .instagram-svg {
						transform: translateX(-40px);
					}

					& .footer__social-label--instagram {
						transform: translateX(40px);
						opacity: 1;
					}

					& .facebook-svg {
						transform: translateX(40px);
					}

					& .footer__social-label--facebook {
						transform: translateX(-40px);
						opacity: 1;
					}
				}
			}

		}
	}

	@media screen and (min-width: 1280px) {
		.footer__title {
			font-size: 2vw;
		}

		.footer__info-title {
			font-size: 1.4375vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.footer__title {
			font-size: 32px;
		}

		.footer__info-title {
			font-size: 22px;
		}
	}

	@media screen and (max-width: 824px) {	
		.footer__info {	
			min-height: 20rem;
		}
	}
</style>