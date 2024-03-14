<script setup>
	import { inject } from "vue"
	import Offer from "./Offer.vue"

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


	const latestOffers = [
		{
			title: "Pandora",
			author: "Amanda Brown",
			date: "17th February 2024",
			tag: tags.JEWELRY,
			image: offerImage1
		},
		{
			title: "Apple",
			author: "John Davis",
			date: "2nd March 2024",
			tag: tags.TECH,
			image: offerImage2
		},
		{
			title: "Jolyn Swimwear",
			author: "Emily Johnson",
			date: "12th March 2024",
			tag: tags.FASHION,
			image: offerImage3
		},
		{
			title: "AirBnB",
			author: "Jessica Smith",
			date: "29th February 2024",
			tag: tags.TRAVEL,
			image: offerImage4
		},
		{
			title: "Almond Surfboards",
			author: "John Davis",
			date: "29th February 2024",
			tag: tags.SPORT,
			image: offerImage5
		},
		{
			title: "Sephora",
			author: "Samantha Miller",
			date: "7th March 2024",
			tag: tags.BEAUTY,
			image: offerImage6
		}
	]

	const mobileOffers = latestOffers.slice(0, 3)
	const desktopOffers = latestOffers.slice(3)
</script>


<template>
	<section class="offers">
		<h2 class="offers__title">Latest Offers</h2>
		<div class="offers__container">
			<Offer v-for="(offer, i) in mobileOffers" :key="'offer--' + i"  :offer="offer" />
		</div>
		<div v-if="!isMobile" class="offers__container">
			<Offer v-for="(offer, i) in desktopOffers" :key="'offer--' + i"  :offer="offer" />
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
	}
</style>
