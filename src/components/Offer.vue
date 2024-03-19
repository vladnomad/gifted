<script setup>
    import { defineProps } from "vue"

    import ArrowSVG from "../assets/ArrowSVG.vue"

    const props = defineProps({
        offer: Object
    })
</script>


<template>
    <article class="offer">
        <h3 class="offer__title">{{ offer.title }}</h3>
        <div class="offer__author">
            <h4 class="offer__title">{{ offer.author }}</h4>
            <p class="offer__date">{{ offer.date }}</p>
        </div>
        <div class="offer__tags">
            <a class="offer__tag" href="#" title="Some Title">{{ offer.tag }}</a>
        </div>
        <div class="offer__image-container">
            <img class="offer__image" alt="" :src="offer.image" />
        </div>
        <a class="offer__link" href="#">
            <ArrowSVG />
        </a>
    </article>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.offer {
		width: calc(100% - 4rem);
		height: 12.5rem;
		border-radius: 2.5rem;
		flex-direction: column;
		align-items: flex-start;
		padding: 2rem;
		position: relative;
		background-color: $color-sand;
		display: grid;
		grid-template-rows: 2rem 1fr 3.25rem;
		grid-auto-flow: column;
		flex-grow: 1;
		transition: 
			width .35s ease-in-out, 
			background-color .35s ease-in-out
		;

		&__title, &__date {
			margin-block: calc($spacing / 8);
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

		&__author, &__link {
			grid-row: 3;
		}

		&__link, &__tags {
			grid-column: 2;
			justify-self: right;
		}

		&__tags {
			grid-row: 1;
		}

		&__link {
			grid-row: 2;
			display: flex;
			justify-content: flex-end;
			padding-block: 4px;
			transform: translateX(-75px);
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
			padding-left: 1rem;
		}

		&__tags {
			display: flex;
			gap: 1rem;
		}

		&__image {
			border-radius: 1.5rem;
			object-fit: cover;
			align-self: flex-end;
			aspect-ratio: 1/1;
			height: 70%;
			object-position: center center;
			display: flex;
			max-height: 100%;
			width: 100%;
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

	.arrow-svg {
		width: auto;
		height: 80px;
	}

	@media screen and (hover: hover) and (min-width: 824px) {
		.offers__container {
			gap: 3px;

			&:has(.offer:hover) .offer:not(:hover) .offer__image {
				height: 100%;
			}

			&:has(.offer:hover) .offer:not(:hover) .offer__image-container {
				width: calc(100% - 3rem);
				height: calc(100% - 3rem);
			}
		}

		.offer:not(:hover) {
			width: calc(calc(25% - 4rem) - 3px);

			& .offer__link {
				opacity: 0;
			}
		}
		
		.offer:hover {
			width: calc(calc(50% - 4rem) - 3px);
			background-color: $color-sand--dark;
			grid-template-columns: 3fr 2fr;

			& .offer__image {
				max-height: 100%;
				height: 100%;
			}

			& .offer__link {
				transform: translateX(0);
				transition: 
					opacity .45s ease,
					transform .45s ease
				;
			}
		}
	}
</style>
