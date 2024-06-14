<template>
	<section
		class="bento"
		aria-labelledby="bento__title"
	>
		<h2
			class="bento__title"
			id="bento__title"
		>
			Explore unique ways to breath life into unused gifts with Gifted
		</h2>

		<article
			v-for="(article, i) in articles"
			:key="`bento__node--${i + 1}`"
			:class="[
				'bento__node',
				`bento__node--${i + 1}${isMobileClasses[i].animationClass}`
			]"
		>
			<img
				class="bento__node-illustration"
				:src="article.images.illustration.src"
				:alt="article.images.illustration.alt"
				loading="lazy"
			/>
			<img
				v-for="(icon, key) in article.images.icons"
				loading="lazy"
				:key="`bento__node-${key}--${i + 1}`"
				:src="icon.src"
				:alt="icon.alt"
				:class="[
					'bento__node-icon',
					`bento__node-icon--${key}`
				]"
			/>
			<h3 class="bento__node-title">
				{{ article.title }}
			</h3>
			<p class="bento__node-text">
				{{ article.text }}
			</p>
		</article>
	</section>
</template>


<script setup>
	import { inject, reactive, onMounted } from "vue"
	import { articles } from "../constants/homePage.js"

	const isMobile = inject("isMobile")

	const isMobileClasses = reactive([
		{
			animationClass: "",
			_animationDuration: 912.5
		},
		{
			animationClass: "",
			_animationDuration: 900
		},
		{
			animationClass: "",
			_animationDuration: 1100
		},
		{
			animationClass: "",
			_animationDuration: 1000
		}
	])

	onMounted(() => {
		if (isMobile.value) {
			isMobileClasses.forEach((node, i) => {
				const delay = node._animationDuration + 10000 + (i * 2500)
				const delayReset = delay + node._animationDuration

				setInterval(() => {
					node.animationClass = " is-mobile"

					setTimeout(() => {
						node.animationClass = ""
					}, delayReset)
				}, delay)
			})
		} else {
			isMobileClasses.forEach(node => {
				node = (isMobile.value ? " is-mobile" : "")
			})
		}	
	})
</script>


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

				&:hover .bento__node-icon,
				&.is-mobile .bento__node-icon {
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

				&:hover .bento__node-icon,
				&.is-mobile .bento__node-icon {
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

				&:hover .bento__node-icon,
				&.is-mobile .bento__node-icon {
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

				&:hover .bento__node-icon,
				&.is-mobile .bento__node-icon {
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
					min-width: 14rem;

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
			margin-block: calc($spacing * 6) 0;

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
