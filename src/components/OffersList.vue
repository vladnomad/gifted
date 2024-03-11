<script setup>

import { inject } from "vue"
import ArrowSVG from "../assets/ArrowSVG.vue"
import offerImage1 from "../assets/img/offerImage1.webp"
import offerImage2 from "../assets/img/offerImage2.webp"
import offerImage3 from "../assets/img/offerImage3.webp"
import offerImage4 from "../assets/img/offerImage4.webp"
import offerImage5 from "../assets/img/offerImage5.webp"
import offerImage6 from "../assets/img/offerImage6.webp"

const isMobile = inject("isMobile")

const tags = {
    FASHION: "Fashion",
    BEAUTY: "Beauty",
    JEWELRY: "Jewelry",
    HOMEDECOR: "HomeDecor",
    TECH: "Tech",
    SPORT: "Sport",
    SHOES: "Shoes",
    TRAVEL: "Travel",
    ENTERTAINMENT: "Entertainment"
}

</script>


<template>

<section class="offers">
	<h2 class="offers__title">
		Latest Offers
	</h2>
	<div class="offers__container">
		<article class="offer">
			<h3 class="offer__title">
				Pandora
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					Amanda Brown
				</h4>
				<p class="offer__date">
					17th February 2024
				</p>
			</div>
			<div class="offer__tags">
				<a class="offer__tag" href="#" title="Some Title">
					#{{ tags.JEWELRY }}
				</a>
			</div>
			<img class="offer__image" alt="" :src="offerImage1" />
			<a class="offer__link" href="#">
				<ArrowSVG />
			</a>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				Apple
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					John Davis
				</h4>
				<p class="offer__date">
					2nd March 2024
				</p>
			</div>
			<div class="offer__tags">
				<a class="offer__tag" href="#" title="Some Title">
					#{{ tags.TECH }}
				</a>
			</div>
			<img class="offer__image" alt="" :src="offerImage2" />
			<a class="offer__link" href="#">
				<ArrowSVG />
			</a>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				Jolyn Swimwear
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					Emily Johnson
				</h4>
				<p class="offer__date">
					12th March 2024
				</p>
			</div>
			<div class="offer__tags">
				<a class="offer__tag" href="#" title="Some Title">
					#{{ tags.FASHION }}
				</a>
			</div>
			<img class="offer__image" alt="" :src="offerImage3" />
			<a class="offer__link" href="#">
				<ArrowSVG />
			</a>
		</article>
	</div>
	<div v-if="!isMobile" class="offers__container">
		<article class="offer">
			<h3 class="offer__title">
				AirBnB
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					Jessica Smith
				</h4>
				<p class="offer__date">
					29th February 2024
				</p>
			</div>
			<div class="offer__tags">
				<a class="offer__tag" href="#" title="Some Title">
					#{{ tags.TRAVEL }}
				</a>
			</div>
			<img class="offer__image" alt="" :src="offerImage4" />
			<a class="offer__link" href="#">
				<ArrowSVG />
			</a>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				Almond Surfboards
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					John Davis
				</h4>
				<p class="offer__date">
					29th February 2024
				</p>
			</div>
			<div class="offer__tags">
				<a class="offer__tag" href="#" title="Some Title">
					#{{ tags.SPORT }}
				</a>
			</div>
			<img class="offer__image" alt="" :src="offerImage5" />
			<a class="offer__link" href="#">
				<ArrowSVG />
			</a>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				Sephora
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					Samantha Miller
				</h4>
				<p class="offer__date">
					7th March 2024
				</p>
			</div>
			<div class="offer__tags">
				<a class="offer__tag" href="#" title="Some Title">
					#{{ tags.BEAUTY }}
				</a>
			</div>
			<img class="offer__image" alt="" :src="offerImage6" />
			<a class="offer__link" href="#">
				<ArrowSVG />
			</a>
		</article>
	</div>
</section>

</template>


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.offers {
	margin-block: calc($spacing * 16) calc($spacing * 4);

	&__title {
		font-family: $font-display;
		font-size: 26px;
		text-wrap: balance;
		margin-left: calc($spacing * 2);
		margin-bottom: calc($spacing * 4);
	}

	&__container {
		display: flex;
		flex-wrap: wrap;
		gap: calc($spacing * 2);
		margin-top: 3px;
	}
}

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
			opacity .4s ease-in-out,
			transform .5s ease-in-out
		;
	}

	&__author {
		grid-column: 2;
		grid-row: 3;
		justify-self: flex-end;
		text-align: end;
		padding-top: .5rem;
	}

	&__tags {
		display: flex;
		gap: 1rem;
	}

	&__image {
		width: 90px;
		height: 75px;
		border-radius: 1.5rem;
		grid-row: 2 / span 2;
		grid-column: 1;
		align-self: flex-end;
		aspect-ratio: 1 / 0;
		object-fit: cover;
		transition: 
			width .35s ease-in-out,
			height .35s ease-in-out
		;
	}
}

.arrow-svg {
	width: auto;
	height: 80px;
}

@media screen and (hover: hover) and (min-width: 824px) {
	.offers__container {
		gap: 3px;
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
			width: 200px;
			height: 110px;
			grid-row: 2 / span 2;
		}

		& .offer__link {
			transform: translateX(0);
		}
	}
}

@media screen and (min-width: 824px) {	

}

@media screen and (min-width: 1280px) {

}

@media screen and (min-width: 1590px) {

}

@media screen and (max-width: 824px) {	
}

</style>
