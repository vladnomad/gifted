<script setup>
	import footerIMG from "../assets/img/01/4.png"
	import FooterSVG from "../assets/FooterSVG.vue"
	import InstagramSVG from "../assets/InstagramSVG.vue"
	import FacebookSVG from "../assets/FacebookSVG.vue"
</script>


<template>
	<footer class="footer">
		<div class="footer__headline">
			<h2 class="footer__headline-title">
				Get to know Gifted community
			</h2>
			<p class="footer__headline-text">
				Join like-minded people who are doing things differently. Discover new swaps every day and contribute to a supportive community.
			</p>
		</div>

		<img class="footer__image" :src="footerIMG" alt="" />
		
		<div class="footer__info-bg">
			<FooterSVG />
		</div>

		<div class="footer__info">
			<h3 class="footer__info-title">
				Want to learn more about us?
			</h3>
			<p class="footer__info-text">
				Check our latest updates and community events or get&nbsp;in&nbsp;touch for platform support at 
				<a href="mailto:contact@gifted.com" class="link footer__email-link">contact@gifted.com</a>
			</p>
		</div>

		<div class="footer__social">
			<a href="https://instagram.com" class="footer__social-link">
				<InstagramSVG />
				<p class="footer__social-label footer__social-label--instagram">
					Instagram
				</p>
			</a>
			<a href="https://facebook.com" class="footer__social-link">
				<FacebookSVG />
				<p class="footer__social-label footer__social-label--facebook">
					Facebook
				</p>
			</a>
		</div>

		<div class="footer__links">
			<a href="terms-and-conditions" class="link footer__link">
				Terms & Conditions
			</a>
			<a href="privacy-policy" class="link footer__link">
				Privacy Policy
			</a>
			<a href="/" class="link footer__link">
				madebynomad.dev
			</a>
		</div>

	</footer>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.facebook-svg, 
	.instagram-svg {
		width: calc($spacing * 5);
		height: calc($spacing * 5);
		transition: transform .25s ease;
	}

	.footer {
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: calc($spacing * 2);
		grid-row-gap: calc($spacing * 2);
		width: 100%;
		margin-block: calc($spacing * 16) 0;

		&__headline {
			&-title {
				font-family: $font-display;
				font-size: 26px;
				font-weight: 600;
				text-wrap: balance;
				top: -4px;
				position: relative;
				margin-block: calc($spacing * 1.25);
			}

			&-text {
				font-weight: 300;
				text-wrap: balance;
				margin-block: calc($spacing / 2);
			}
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

		&__email-link {
			bottom: -7px;
		}

		&__info {			
			border-radius: 2.5rem;
			flex-direction: column;
			align-items: flex-start;
			padding: calc($spacing * 2);

			&-title {
				font-family: $font-display;

				text-wrap: balance;
				text-align: right;
				font-size: 40px;
				margin-block: auto;
			}

			&-text {
				font-weight: 300;
				text-align: right;
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
			margin-top: calc($spacing * -2);

			&-link {
				width: 100%;
				height: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
			}

			&-label {
				font-family: $font-display;
				font-size: 20px;
				font-weight: 600;
				opacity: 0;
				z-index: -1;
				position: absolute;
				transition: 
					opacity .25s ease,
					transform .25s ease
				;

				&--instagram {
					transform: translateX(80px);
				}

				&--facebook {
					transform: translateX(-80px);
				}
			}
		}
	}

	@media screen and (min-width: 824px) {	
		.footer {
			grid-template-columns: 1fr 14rem 16rem;
			grid-template-rows: 1fr 16rem 14rem;

			&__headline {
				grid-column: 2 / span 3;
				grid-row: 1;

			}
			
			&__image {	
				grid-column: 1;
				grid-row: 1 / span 3;
				margin-right: calc($spacing * 4);
				margin-left: calc(calc($spacing * 2) * -1);
				min-height: 494px;
				max-height: 660px;
				align-self: flex-end;
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
						transform: translateX(-50px);
					}

					& .footer__social-label--instagram {
						transform: translateX(45px);
						opacity: 1;
					}

					& .facebook-svg {
						transform: translateX(50px);
					}

					& .footer__social-label--facebook {
						transform: translateX(-45px);
						opacity: 1;
					}
				}
			}

		}
	}

	@media screen and (min-width: 1280px) {
		.footer__headline-title {
			font-size: 2vw;
		}

		.footer__info-title {
			font-size: 3vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.footer__headline-title {
			font-size: 44px;
		}

		.footer__info-title {
			font-size: 44px;
		}
	}

	@media screen and (max-width: 824px) {	
		.footer__info {	
			/*  */min-height: 20rem;
		}
	}
</style>