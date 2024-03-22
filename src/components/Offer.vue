<script setup>
    import { defineProps } from "vue"

    import ArrowSVG from "../assets/ArrowSVG.vue"

    const props = defineProps({
        offer: Object
    })

	const defineTimeAgo = (date) => {
		let timeAgo

		const offerDate = new Date(date)
		const currentDate = new Date()

		const daysAgo = Math.floor(
			(currentDate - offerDate) / 
			(1000 * 60 * 60 * 24)
		)

		if (daysAgo < 31) {
			timeAgo = `${daysAgo} days ago`
		} else if (daysAgo < 61) {
			timeAgo = `1 month ago`
		} else {
			timeAgo = `${Math.floor(daysAgo / 30)} months ago`
		}
		
		return timeAgo
	}
</script>


<template>
    <article class="offer">
        <h3 class="offer__title">{{ offer.title }}</h3>
        <div class="offer__author">
            <h4 class="offer__title">{{ offer.author.split(" ").join("\n") }}</h4>
            <p class="offer__date">{{ defineTimeAgo(offer.date) }}</p>
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
		
		// TRY border: silver OR lavender

		width: calc(100% - 4rem);
		height: 11rem;
		border-radius: 2.5rem;
		flex-direction: column;
		align-items: flex-start;
		padding: 2rem;
		position: relative;
		/* background-color: $color-sand; */
		display: grid;
		/* grid-template-rows: 2rem 1fr 3.25rem; */
		grid-template-rows: 2rem 4.25rem 5.25rem;
		grid-template-columns: 55% 45%;
		max-height: 11.5rem;
		grid-auto-flow: column;
		flex-grow: 1;
		transition: 
			width .35s ease-in-out, 
			background-color .35s ease-in-out
		;

		&__title, &__date {
			margin-block: calc($spacing / 8);
			/* white-space: nowrap;
			-webkit-line-clamp: 1; 
			overflow: hidden; */
			white-space: pre-line;
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
			position: relative;
			top: -0.75rem;
		}

		&__author {
			grid-column: 2;
			grid-row: 3;
			justify-self: flex-end;
			text-align: end;
			justify-content: center;
			display: flex;
			flex-direction: column;
			height: 100%;
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


			box-shadow: 0px 1px 4px -1px $color-shadow--main;

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
			gap: 2rem;
			margin-bottom: 2rem;

			&:has(.offer:hover) .offer:not(:hover) .offer__image {
				height: 100%;
			}

			&:has(.offer:hover) .offer:not(:hover) .offer__image-container {
				width: calc(100% - 3rem);
				height: calc(100% - 3rem);
			}
		}

		.offer:not(:hover) {
			width: calc(calc(25% - 4rem) - 2rem);

			& .offer__link {
				opacity: 0;
			}
		}
		
		.offer:hover {
			width: calc(calc(50% - 4rem) - 2rem);
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






	.offer {
		height: 11rem;
		box-shadow: 0px 1px 4px -1px $color-shadow--main;
		/* box-shadow: 0px 1px 7px -1px hsla(226, 75%, 11%, 0.25); */
		background-color: #f2f1ee63;
		/*  transition: background-color .3s ease-in-out;*/
		/* background: linear-gradient(
			25deg, 
			hsla(60, 100%, 93.7%, 0.42),
			#f2f1ee63,
			#f2e6e180
		); */
	}

	@media screen and (hover: hover) and (min-width: 824px) {
		.offer:hover {
			/*  */background-color: transparent;
		}
	}

</style>
