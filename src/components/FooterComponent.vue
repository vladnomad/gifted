<script setup>
	import FooterSVG from "../assets/svg/FooterSVG.vue"
	
	import footerIMG from "../assets/img/illustrations/footerComponent.png"
	import instagramIMG from "../assets/img/icons/footerComponent_instagram.png"
	import facebookIMG from "../assets/img/icons/footerComponent_facebook.png"
</script>


<template>
	<footer class="footer">
		<div class="footer__headline">
			<h2 class="footer__headline-title">
				Get to know Gifted community
			</h2>
			<p class="footer__headline-text">
				Join like-minded people who are doing things differently. Discover&nbsp;new&nbsp;swaps every day and contribute to a supportive community.
			</p>
		</div>

		<img class="footer__image" :src="footerIMG" alt="" loading="lazy" />
		
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
				<img class="footer__social-image footer__social-image--instagram" :src="instagramIMG" alt="" loading="lazy" />
				<p class="footer__social-label footer__social-label--instagram">
					Instagram
				</p>
			</a>
			<a href="https://facebook.com" class="footer__social-link">
				<img class="footer__social-image footer__social-image--facebook" :src="facebookIMG" alt="" loading="lazy" />
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

	.footer {
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: calc($spacing * 2);
		grid-row-gap: calc($spacing * 2);
		grid-template-columns: 31.5rem 14rem 16rem;
		grid-template-rows: 1fr 16rem 14rem;
		margin-block: calc($spacing * 16) 0;

		&__headline {
			grid-column: 1 / span 3;
			grid-row: 1;
			padding-bottom: 1rem;
			
			&-title {
				font-family: $font-display;
				font-size: 33px;
				font-weight: 600;
				text-wrap: balance;
				margin-block: calc($spacing * 1.25) calc($spacing * .5);
			}

			&-text {
				font-weight: 300;
				max-width: 36rem;
			}
		}
		
		&__image {	
			grid-column: 1;
			grid-row: 1 / span 3;
			max-height: 544px;
			align-self: flex-end;
			margin-left: -2.75rem;
			height: 79%;
			width: auto;
		}

		&-svg {
			width: 100%;
			height: 100%;
			filter: drop-shadow(1px 1px 1px $color-shadow--drop) ;
		}

		&__links {
			grid-column: 2;
			grid-row: 3;
			box-shadow: 0px 1px 4px -1px $color-shadow--box;
			background-color: $color-seafoam;
			border-radius: 2.5rem;
			padding: calc($spacing * 2);

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-evenly;
			width: 10rem;
			height: 10rem;
			max-width: 10rem;
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
			grid-column: 2 / span 2;
			grid-row: 2;

			&-title {
				font-family: $font-display;
				text-wrap: balance;
				text-align: right;
				font-size: 33px;
				margin-block: auto;
			}

			&-text {
				font-weight: 300;
				text-align: right;
			}

			&-bg {
				grid-column: 2 / span 2;
				grid-row: 2 / span 2;
				position: relative;
				z-index: -1;
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

			&-image {
				transition: transform .25s ease;

				&--instagram {
					width: calc($spacing * 6);
					height: calc($spacing * 6);
				}

				&--facebook {
					width: calc($spacing * 5.5);
					height: calc($spacing * 5.5);
				}
			}

			&-link {
				width: 100%;
				height: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				&:hover {
					& .footer__social-image--instagram {
						transform: translateX(-3rem);
					}

					& .footer__social-label--instagram {
						transform: translateX(3rem);
						opacity: 1;
					}

					& .footer__social-image--facebook {
						transform: translateX(3rem);
					}

					& .footer__social-label--facebook {
						transform: translateX(-3rem);
						opacity: 1;
					}
				}
			}

			&-label {
				opacity: 0;
				z-index: -1;
				position: absolute;
				font-weight: 300;
				letter-spacing: .25px;
				transition: 
					opacity .25s ease,
					transform .25s ease
				;

				text-decoration: underline;
				text-decoration-thickness: 2px;
				text-decoration-color: hsl(160, 40%, 80%);
				text-underline-offset: .3275rem;
				mix-blend-mode: multiply;

				&--instagram {
					transform: translateX(1.5vw);
				}

				&--facebook {
					transform: translateX(-1.5vw);
				}
			}
		}
	}

	@media screen and (min-width: 893px) {	
	}

	@media screen and (min-width: 1192px) {
		.footer {
			&__headline-title,
			&__info-title {
				font-size: 2.773vw;
			}
		}
	}

	@media screen and (min-width: 1590px) {
		.footer {
			&__headline-title,
			&__info-title {
				font-size: 44px;
			}
		}
	}

	@media screen and (max-width: 892px) {	
		.footer {
			display: flex;
			flex-wrap: wrap;
			margin-block: 0;
			grid-row-gap: 4rem;

			&__headline {
				text-align: center;
				margin-inline: auto;

				&-text {
					margin-inline: auto;
				}
			}

			&__image {
				align-self: center;
				margin-inline: auto;
				width: 100%;
				height: auto;
				max-width: 528px;
				max-height: 494px;
			}

			&__info {
				margin-block: 0;
				min-height: unset;
				width: 100%;
				padding: 0;

				&-bg {
					display: none;
				}


				&-title {
					text-align: center;
					max-width: 20rem;
    				margin-inline: auto;
				}
			
				&-text {
					text-align: center;
					margin-inline: auto;
					max-width: 30rem;
					line-height: 1.8rem;
				}
			}

			&__social,
			&__links {
				margin-inline: auto;
				width: 100%;
				max-width: 23rem;
			}

			&__links {
				align-items: center;
			}

			&__social {
				padding: 2rem;
				max-height: 10rem;
				box-shadow: 0px 1px 4px -1px hsla(226, 75%, 11%, 0.5);
				border-radius: 2.5rem;
				background-color: hsl(245, 90%, 88%);
				margin-top: 0;
				min-width: 10rem;

				&-link {
					width: calc(100% - 3rem);

					&:nth-child(1) {
						justify-content: center;
    					margin-left: -5.5rem;
					}
					&:nth-child(2) {
						justify-content: center;
						margin-right: -6.5rem;
					}
				}

				&-image--instagram {
					transform: translateX(-3rem);
				}

				&-label--instagram {
					transform: translateX(3rem);
					opacity: 1;
					z-index: auto;
				}

				&-image--facebook {
					transform: translateX(3rem);
				}
				
				&-label--facebook {
					transform: translateX(-3rem);
					opacity: 1;
					z-index: auto;
				}
			}
		}
	}
</style>
