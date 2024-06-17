<template>
	<section class="offer-list">
		<h2 class="offer-list__title">
			Latest Offers
		</h2>

		<div class="offer-list__container">
			<OfferListItem
				v-for="(offer, i) in mobileOffers"
				:key="`offer--${i}`"
				:offer="offer"
			/>
		</div>

		<div
			v-if="!isMobile"
			class="offer-list__container offer-list__container--desktop"
		>
			<OfferListItem
				v-for="(offer, i) in desktopOffers"
				:key="`offer--${i}`"
				:offer="offer"
			/>
		</div>
	</section>
</template>


<script setup>
	import { inject, onMounted, computed } from "vue"
	import { useStoreGetters } from "../store/helpers/useStoreGetters"
	import { useStoreActions } from "../store/helpers/useStoreActions"
	import OfferListItem from "./OfferListItem.vue"

	const isMobile = inject("isMobile")
	const { latestOffers } = useStoreGetters()
	const { fetchLatestOffers, loadLatestOffers } = useStoreActions()

	const getLatestOffers = () => {
		const cachedTimestamp = sessionStorage.getItem("latestOffersTimestamp")
		const cacheValidityDuration = 1000 * 60 * 60
		const isValidCache = 
			cachedTimestamp && 
			(Date.now() - cachedTimestamp < cacheValidityDuration)

		if (isValidCache) {
			loadLatestOffers()
		} else {
			sessionStorage.removeItem("latestOffers")
			sessionStorage.removeItem("latestOffersTimestamp")
			fetchLatestOffers()
		}
	}

	onMounted(() => {
		getLatestOffers()
	})

	const mobileOffers = computed(() => latestOffers.value.slice(0, 3))	
	const desktopOffers = computed(() => latestOffers.value.slice(3, 6))
</script>


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

	@media screen and (hover: hover) and (min-width: 893px) {
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

	@media screen and (max-width: 892px) {
		.offer-list {
			margin-block: calc($spacing * 6) calc($spacing * 4);

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
