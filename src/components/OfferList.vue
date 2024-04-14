<script setup>
	import { inject } from "vue"
	import OfferListItem from "./OfferListItem.vue"

	import photo_1 from "../assets/img/photos/offerList_1.webp"
	import photo_2 from "../assets/img/photos/offerList_2.webp"
	import photo_3 from "../assets/img/photos/offerList_3.webp"
	import photo_4 from "../assets/img/photos/offerList_4.webp"
	import photo_5 from "../assets/img/photos/offerList_5.webp"
	import photo_6 from "../assets/img/photos/offerList_6.webp"

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
			author: "Marta Kowalczyk",
			date: "12 March 2024",
			tag: tags.JEWELRY,
			photo: photo_1
		},
		{
			title: "Apple",
			author: "John Davis",
			date: "7 March 2024",
			tag: tags.TECH,
			photo: photo_2
		},
		{
			title: "Jolyn Swimwear",
			author: "Emily Johnson",
			date: "2 March 2024",
			tag: tags.FASHION,
			photo: photo_3
		},
		{
			title: "AirBnB",
			author: "Leonardo Rossi",
			date: "29 February 2024",
			tag: tags.TRAVEL,
			photo: photo_4
		},
		{
			title: "Almond Surfboards",
			author: "John Davis",
			date: "29 February 2024",
			tag: tags.SPORT,
			photo: photo_5
		},
		{
			title: "Sephora",
			author: "Maria Bianchi",
			date: "17 February 2024",
			tag: tags.BEAUTY,
			photo: photo_6
		}
	]

	const mobileOffers = latestOffers.slice(0, 3)
	const desktopOffers = latestOffers.slice(3, 6)
</script>


<template>
	<section class="offer-list">
		<h2 class="offer-list__title">Latest Offers</h2>
		<div class="offer-list__container">
			<OfferListItem v-for="(offer, i) in mobileOffers" :key="'offer--' + i"  :offer="offer" />
		</div>
		<div v-if="!isMobile" class="offer-list__container offer-list__container--desktop">
			<OfferListItem v-for="(offer, i) in desktopOffers" :key="'offer--' + i"  :offer="offer" />
		</div>
	</section>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.offer-list {
		margin-block: calc($spacing * 4);

		&__title {
			font-family: $font-display;
			font-size: 33px;
			text-wrap: balance;
			margin-left: calc($spacing * 1.875);
			margin-bottom: calc($spacing * 4);
		}

		&__container {
			display: flex;
			flex-wrap: wrap;
			gap: calc($spacing * 2);
			margin-top: 3px;

			& .offer {
				background-color: $color-peach;

				&:first-child {
					background-color: $color-periwinkle;
				}

				&:last-child {
					background-color: $color-mimosa;
				}
			}

			&.offer-list__container--desktop .offer {
				background-color: $color-seafoam;

				&:first-child {
					background-color: $color-mimosa;
				}

				&:last-child {
					background-color: $color-periwinkle;
				}
			}
		}
	}

	@media screen and (hover: hover) and (min-width: 824px) {
		.offer-list {
			margin-block: calc($spacing * 16) calc($spacing * 4);

			&__container {
				gap: 2rem;
				margin-bottom: 2rem;
			}
		}
	}

	@media screen and (min-width: 1192px) {
		.offer-list__title {
			font-size: 2.773vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.offer-list__title {
			font-size: 44px;
		}
	}

	@media screen and (max-width: 824px) {
		.offer-list {
			&__container {
				flex-direction: column;
			}
			&__title {
				text-align: center;
				margin-inline: 0;
			}
		}
	}
</style>
