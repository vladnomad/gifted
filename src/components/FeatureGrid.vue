<script setup>
	import illustration_1 from "../assets/img/illustrations/featureGrid_1.png"
	import illustration_2 from "../assets/img/illustrations/featureGrid_2.png"
	import illustration_3 from "../assets/img/illustrations/featureGrid_3.png"
	import illustration_4 from "../assets/img/illustrations/featureGrid_4.png"

	import icon_11 from "../assets/img/icons/featureGrid_11.png"
	import icon_12 from "../assets/img/icons/featureGrid_12.png"
	import icon_13 from "../assets/img/icons/featureGrid_13.png"

	import icon_21 from "../assets/img/icons/featureGrid_21_0.png"
	import icon_22 from "../assets/img/icons/featureGrid_22_0.png"
	import icon_23 from "../assets/img/icons/featureGrid_23_0.png"
	import icon_24 from "../assets/img/icons/featureGrid_24_0.png"

	import icon_31 from "../assets/img/icons/featureGrid_31.png"
	import icon_32 from "../assets/img/icons/featureGrid_32.png"
	import icon_33 from "../assets/img/icons/featureGrid_33.png"
	import icon_34 from "../assets/img/icons/featureGrid_34.png"

	import icon_41 from "../assets/img/icons/featureGrid_41.png"
	import icon_42 from "../assets/img/icons/featureGrid_42.png"
	import icon_43 from "../assets/img/icons/featureGrid_43.png"
	import icon_44 from "../assets/img/icons/featureGrid_44.png"

	const articles = [
		{
			title: "Trusted Trades",
			text: "Enjoy peace of mind with\u00a0our carefully crafted gift card swapping system",
			images: {
				illustration: {
					src: illustration_1,
					alt: ""
				},
				icons: {
					primary: {
						src: icon_11,
						alt: ""
					},
					secondary: {
						src: icon_12,
						alt: ""
					},
					tertiary: {
						src: icon_13,
						alt: ""
					}
				}
			}
		},
		{
			title: "Effortless Listing",
			text: "List your gift cards in a snap",
			images: {
				illustration: {
					src: illustration_2,
					alt: ""
				},
				icons: {
					primary: {
						src: icon_21,
						alt: ""
					},
					secondary: {
						src: icon_22,
						alt: ""
					},
					tertiary: {
						src: icon_23,
						alt: ""
					},
					quaternary: {
						src: icon_24,
						alt: ""
					}
				}
			}
		},
		{
			title: "Tailored Deals",
			text: "Discover personalized gift card offers that match your style and interests",
			images: {
				illustration: {
					src: illustration_3,
					alt: ""
				},
				icons: {
					primary: {
						src: icon_31,
						alt: ""
					},
					secondary: {
						src: icon_32,
						alt: ""
					},
					tertiary: {
						src: icon_33,
						alt: ""
					},
					quaternary: {
						src: icon_34,
						alt: ""
					}
				}
			}
		},
		{
			title: "Friendly Chats",
			text: "Connect directly for smooth conversations and\u00a0joyful transactions",
			images: {
				illustration: {
					src: illustration_4,
					alt: ""
				},
				icons: {
					primary: {
						src: icon_41,
						alt: ""
					},
					secondary: {
						src: icon_42,
						alt: ""
					},
					tertiary: {
						src: icon_43,
						alt: ""
					},
					quaternary: {
						src: icon_44,
						alt: ""
					}
				}
			}
		}
	]
</script>


<template>
	<section class="bento" aria-labelledby="bento__title">		
		<h2 class="bento__title" id="bento__title">
			Explore unique ways to breath life into unused gifts with Gifted
		</h2>

		<article
			v-for="(article, i) in articles"
			:key="'bento__node--' + (i + 1)"
			:class="['bento__node', 'bento__node--' + (i + 1)]">
			<img 
				class="bento__node-illustration"
				:src="article.images.illustration.src"
				:alt="article.images.illustration.alt"
				loading="lazy"
			/>
			<img 
				v-for="(icon, key) in article.images.icons"
				:key="'bento__node-' + key + '--' + (i + 1)"
				:class="['bento__node-icon', 'bento__node-icon--' + key]"
				:src="icon.src"
				:alt="icon.alt"
				loading="lazy"
			/>
			<h3 class="bento__node-title">{{ article.title }}</h3>
			<p class="bento__node-text">{{ article.text }}</p>
		</article>
	</section>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";
	@import "../assets/styles/keyframes.css";

	.bento {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: calc($spacing * 2);
		grid-row-gap: calc($spacing * 2);
		width: 100%;
		margin-block: calc($spacing * 4);

		&__title {
			font-family: $font-display;
			text-wrap: balance;
			text-align: end;
			font-size: 33px;
			padding-right: 1rem;
		}

		article:nth-child(even) {
			align-items: flex-end;
			text-align: right;
		}

		&__node {
			box-shadow: 0px 1px 4px -1px $color-shadow--box;
			border-radius: 2.5rem;
			flex-direction: column;
			align-items: flex-start;
			padding: calc($spacing * 2);
			display: flex;
			position: relative;
			justify-content: flex-end;

			&-title {
				font-family: $font-display;
				font-size: 22px;
				margin: 0;
			}

			&-text {
				font-weight: 300;
				text-wrap: balance;
				margin-block: calc($spacing / 2);
			}

			&-illustration {
				position: absolute;
				z-index: 5;
			}

			&-icon {
				position: absolute;

				&--primary {
					z-index: 4;
				}

				&--secondary {
					z-index: 3;
				}

				&--tertiary {
					z-index: 2;
				}

				&--quaternary {
					z-index: 1;
				}

				&--quinary {
					z-index: 0;
				}
			}

			&--1 {
				background-color: $color-periwinkle;

				& .bento__node-illustration {
					left: 0;
					max-width: 17.5rem;
					bottom: 13.125rem;
				}

				& .bento__node-icon {
					max-width: 8rem;
					top: 7rem;
					right: 1.25rem;

					animation-timing-function: ease-in-out;

					&--primary {
						animation-duration: .9125s;
					}

					&--secondary {
						transform-origin: 50% 40%;	
						animation-duration: .9125s;
					}

					&--tertiary {
						animation-duration: .9125s;
					}
				}

				&:hover .bento__node-icon {
					&--primary {
						animation-name: featureGrid_11;
					}

					&--secondary {
						animation-name: featureGrid_12;
					}

					&--tertiary {				
						animation-name: featureGrid_13;
					}
				}
			}
			
			&--2 {
				background-color: $color-peach;

				& .bento__node-illustration {
					left: 2.25rem;
					max-width: 14rem;
					top: 3rem;
				}

				& .bento__node-icon {
					left: 2rem;
					max-width: 14rem;
					bottom: 7rem;

					&--secondary,
					&--quaternary {
						animation-timing-function: cubic-bezier(.05,.67,.61,.94);
					}

					&--tertiary,
					&--quaternary {
						transform-origin: 70% 70%;	
					}

					&--primary {
						animation-timing-function: ease;
						transform-origin: right bottom;
						animation-duration: .75s;
					}

					&--secondary {
						transform-origin: 30% 30%;
						animation-duration: .8s;
					}

					&--tertiary {
						animation-timing-function: cubic-bezier(.5,.67,.52,.94);
						animation-duration: .875s;
					}
					
					&--quaternary {
						animation-duration: .9s;
					}
				}

				&:hover .bento__node-icon {
					&--primary {
						animation-name: featureGrid_21;
					}

					&--secondary {
						animation-name: featureGrid_22;
					}

					&--tertiary,
					&--quaternary {				
						animation-name: featureGrid_23;
					}
				}
			}
			
			&--3 {
				background-color: $color-mimosa;

				& .bento__node-illustration {
					left: 2.25rem;
					max-width: 14rem;
					top: 3rem;
				}

				& .bento__node-icon {
					right: 1rem;
					max-width: 10.5rem;
					top: 0;
					transform: rotateZ(42deg);
					transform-origin: 17% 83%;
					animation-timing-function: ease;

					&--primary,
					&--quaternary {
						animation-duration: 1.1s;
					}

					&--secondary,
					&--tertiary {
						animation-duration: .95s;
					}
				}

				&:hover .bento__node-icon {
					&--primary {
						animation-name: featureGrid_31;
					}

					&--secondary {
						animation-name: featureGrid_32;
					}

					&--tertiary {
						animation-name: featureGrid_33;
					}
					
					&--quaternary {
						animation-name: featureGrid_34;
					}
				}
			}
			
			&--4 {
				background-color: $color-seafoam;

				& .bento__node-illustration {
					right: 1rem;
					max-width: 21.5rem;
					bottom: 3.75rem;
				}

				& .bento__node-icon {
					left: 1rem;
					max-width: 13.5rem;
					top: 2rem;
					animation-timing-function: ease-in-out;
					animation-duration: .9s;

					&--primary {
						transform-origin: 40% 38%;	
					}

					&--secondary {
						transform-origin: 40% 38%;	
						transform: scale(.025);
						opacity: 0;
					}
					
					&--quaternary {	
						animation-duration: 1s;
					}
				}

				&:hover .bento__node-icon {
					&--primary {
						animation-name: featureGrid_41;
					}

					&--secondary {
						animation-name: featureGrid_42;
					}
					
					&--quaternary {
						animation-name: featureGrid_43;
					}
				}
			}
		}
	}

	@media screen and (min-width: 893px) {	
		.bento {
			grid-template-columns: 4fr repeat(2, 3fr);
			margin-block: calc($spacing * 16) calc($spacing * 4);

			&__title {
				grid-area: 1 / 1 / 1 / 4;

				font-size: 33px;
			}
			
			&__node {	
				&-title {
					font-size: 19.5px;
				}

				&--1, &--2 {
					min-height: 12.5rem;
				}

				&--3, &--4 {
					min-height: 25rem;
				}

				&--1 {
					grid-area: 2 / 1 / 2 / 3;

					& .bento__node-illustration {
						bottom: 5.65rem;
					}

					& .bento__node-icon {
						top: 1rem;
						right: 3.25rem;
					}
				}
				
				&--2 {
					grid-area: 2 / 3 / 2 / 4;

					& .bento__node-illustration {
						display: none;
					}
				}
				
				&--3 {
					grid-area: 3 / 1 / 4 / 2;
				}
				
				&--4 {
					grid-area: 3 / 2 / 4 / 4;
				}
			}
		}
	}

	@media screen and (min-width: 1192px) {
		.bento {
			&__title {
				font-size: 2.773vw;
			}

			&__node-title {
				font-size: 1.635vw;
			}
		}
	}

	@media screen and (min-width: 1590px) {
		.bento {
			&__title {
			font-size: 44px;
			}

			&__node-title {
			font-size: 26px;
			}
		}
	}

	@media screen and (max-width: 892px) {	
		.bento {
			&__title {
				text-align: center;
			}
			
			&__node {	
				margin-block: calc($spacing * 4);
				margin-inline: auto;
				height: 19.875rem;
				min-width: 19.875rem;
				max-width: 31.5rem;
				width: 83%;

				&--1 {
					margin-top: 16rem;

					& .bento__node-illustration {
						left: unset;
						align-self: center;
					}

					& .bento__node-icon {
						right: unset;
						top: unset;
						left: 1.5rem;
						bottom: 2.5rem;
					}
					
					& .bento__node-text {
						max-width: 70%;
					}
				}

				&--2 {
					& .bento__node-illustration {
						right: -0.675rem;
						top: -2.3rem;
						max-width: 16.5rem;
						left: unset;
						z-index: 0;
					}

					& .bento__node-icon {
						left: 0.625rem;
						bottom: 6.5rem;
						max-width: 13rem;
					}
				}

				&--3 {
					& .bento__node-illustration {
						left: -0.875rem;
						top: -1.5rem;
						max-width: 15.75rem;
					}

					& .bento__node-icon {
						left: 12rem;
						top: -0.75rem;
					}

					& .bento__node-title {
						z-index: 6;
					}
				}

				&--4 {
					margin-top: 8rem;

					& .bento__node-illustration {
						bottom: 11rem;
						max-width: 19rem;
						align-self: center;
						right: unset;
					}

					& .bento__node-icon {
						left: unset;
						top: unset;
						right: 1.5rem;
						bottom: 0.75rem;
						max-width: 9.875rem;
					}

					& .bento__node-text {
						max-width: 70%;
					}
				}
			}
		}
	}
</style>
