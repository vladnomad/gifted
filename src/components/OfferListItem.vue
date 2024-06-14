<template>
    <article class="offer">
        <h3 class="offer__title">
			{{ offer.title }}
		</h3>

        <div class="offer__author">
            <h4 class="offer__title">
				{{ offer.author.split(" ").join("\n") }}
			</h4>
            <p class="offer__date">
				{{ defineTimeAgo(offer.date) }}
			</p>
        </div>

        <div class="offer__tag-container">
            <a
				class="offer__tag"
				href="#"
			>
				{{ offer.tag }}
			</a>
        </div>

        <div class="offer__photo-container">
            <img
				class="offer__photo"
				alt=""
				:src="offer.photo"
				loading="lazy"
			/>
        </div>

        <div 
			class="offer__arrow-container"
			href="#"
		>
            <ArrowSVG />
        </div>
		
        <a
			class="offer__link"
			href="#"
		></a>
    </article>
</template>


<script setup>
    import { defineProps } from "vue"

    import ArrowSVG from "../assets/svg/ArrowSVG.vue"

    const props = defineProps({
        offer: Object
    })

	const defineTimeAgo = (date) => {
		let timeAgo

		const offerDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000)
		const currentDate = new Date()

		const daysAgo = Math.floor(
			(currentDate - offerDate) / 
			(1000 * 60 * 60 * 24)
		)

		if (daysAgo < 31) {
			timeAgo = `${daysAgo} days ago`
		} else if (daysAgo < 61) {
			timeAgo = "1 month ago"
		} else {
			timeAgo = `${Math.floor(daysAgo / 30)} months ago`
		}
		
		return timeAgo
	}
</script>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.arrow-svg {
		width: auto;
		height: 80px;
	}

	.offer {
		width: calc(100% - 4rem);
		height: 11rem;
		border-radius: 2.5rem;
		flex-direction: column;
		align-items: flex-start;
		padding: 2rem;
		position: relative;
		display: grid;
		grid-template-rows: 2rem 4.25rem 5.25rem;
		grid-template-columns: 55% 45%;
		max-height: 11.5rem;
		grid-auto-flow: column;
		flex-grow: 1;
		height: 11rem;
		box-shadow: 0px 1px 4px -1px $color-shadow--box;
		transition: width .35s ease-in-out;

		&__link {
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;
			border-radius: 2.5rem;
		}

		&__title, &__date {
			margin-block: 0;
		}

		&__title {
			white-space: pre-line;
			font-family: $font-display;
			font-size: 16.25px;
			font-weight: 600;
		}

		&__date, &__tag {
			font-weight: 300;
		}

		&__date {
			white-space: nowrap;
			-webkit-line-clamp: 1; 
			overflow: hidden;
		}

		&__title {
			grid-column: 1 / span 2;
			grid-row: 1;

			&-link {
				grid-column: 1;
			}
		}

		&__author, &__arrow-container {
			grid-row: 3;
		}

		&__arrow-container, &__tag-container {
			grid-column: 2;
			justify-self: right;
		}

		&__tag-container {
			grid-row: 1;
			display: flex;
			gap: 1rem;
			align-self: center;
		}

		&__arrow-container {
			grid-row: 2;
			display: flex;
			justify-content: flex-end;
			padding-block: 4px;
			position: relative;
			top: -.9375rem;
			transform: translateX(-65px);
			transition: 
				opacity .25s ease,
				transform .25s ease
			;
		}

		&__author {
			grid-column: 2;
			grid-row: 3;
			justify-self: flex-end;
			text-align: end;
			justify-content: flex-end;
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		&__photo {
			border-radius: 1.5rem;
			object-fit: cover;
			align-self: flex-end;
			aspect-ratio: 1/1;
			height: 70%;
			object-position: center center;
			display: flex;
			max-height: 100%;
			width: 100%;
			box-shadow: 0px 1px 4px -1px $color-shadow--box;
			transition: 
				width .35s ease-in-out,
				height .35s ease-in-out
			;

			&-container {
				max-width: 220px;
				display: flex;
				border-radius: 1.5rem;
				position: absolute;
				bottom: 1.5rem;
				left: 1.5rem;
				width: 45%;
				height: 50%;
				transition: 
					width .35s ease-in-out, 
					height .35s ease-in-out
				;
			}
		}
	}

	@media screen and (hover: hover) and (min-width: 893px) {
		.offer-list__container:has(.offer:hover) .offer:not(:hover) {
			& .offer__photo {
				height: 100%;
			}

			& .offer__photo-container {
				width: calc(100% - 3rem);
				height: calc(100% - 3rem);
			}
		}

		.offer:not(:hover) {
			width: calc(calc(25% - 4rem) - 2rem);

			& .offer__arrow-container {
				opacity: 0;
			}
		}
		
		.offer:hover {
			width: calc(calc(50% - 4rem) - 2rem);
			grid-template-columns: 3fr 2fr;

			& .offer__photo {
				max-height: 100%;
				height: 100%;
			}

			& .offer__arrow-container {
				transform: translateX(10px);
				transition: 
					opacity .45s ease,
					transform .45s ease
				;
			}
		}
	}

	@media screen and (min-width: 1142px) {
		.offer__title {
			font-size: 1.425vw;
		}
	}

	@media screen and (min-width: 1405px) {
		.offer {
			&__title {
				font-size: 20px;
			}

			&__tag-container {
				align-self: baseline;
			}
		}
	}

	@media screen and (max-width: 892px) {
		.offer:nth-child(even) {
			grid-template-columns: minmax(5.1rem, 7.5rem) minmax(11rem, 1fr);
			
			& .offer__title,
			& .offer__author,
			& .offer__tag-container,
			& .offer__arrow-container {
				grid-column: 1;
			}

			& .offer__photo-container {
				grid-column: 2;
			}
		}

		.offer:nth-child(odd) {
			& .arrow-svg {
				rotate: -180deg;
			}
		}

		.offer {
			margin: 2.5rem auto;
			padding: 3rem;
			transition: none;
			grid-template-columns: minmax(11rem, 1fr) minmax(5.1rem, 7.5rem);
			grid-template-rows: 1fr 2rem 6fr 5.25rem;
			grid-column-gap: 2.5rem;

			min-height: 17.875rem;
			max-height: 17.875rem;
			height: 17.875rem;

			min-width: 17.875rem;
			max-width: 29.5rem;
			width: 73%;

			&__arrow-container {
				grid-row: 3;
				justify-content: center;
				align-items: center;
				height: 100%;
				position: unset;
				padding-block: 0;
				transform: none;
			}

			&__title {
				grid-column: 2;
			}

			&__tag-container {
				grid-row: 2;
				justify-self: flex-start;
				align-self: flex-start;
			}

			&__author {
				grid-row: 4;
			}

			&__photo-container {
				position: initial;
				grid-row: 1 / span 4;
				height: 100%;
				width: 100%;
				max-width: unset;
				min-width: 11rem;
			}

			&__photo {
				height: 100%;
			}
		}
	}
</style>
