<script setup></script>


<template>

	<section class="bento" aria-labelledby="bento__title">
		<h2 class="bento__title" id="bento__title">
			Explore unique ways to breath life into unused gifts with Gifted.
		</h2>
		
		<article class="bento__node bento__node--1">
			<img class="bento__node-image" src="" alt="">
			<h3 class="bento__node-title">
				Trusted Trades
			</h3>
			<p class="bento__node-text">
				Enjoy peace of mind with our carefully verified gift card swapping system
			</p>
		</article>
		<article class="bento__node bento__node--2">
			<img class="bento__node-image" src="" alt="">
			<h3 class="bento__node-title">
				Effortless Listing
			</h3>
			<p class="bento__node-text">
				List your gift cards in a snap
			</p>
		</article>
		<article class="bento__node bento__node--3">
			<img class="bento__node-image" src="" alt="">
			<h3 class="bento__node-title">
				Tailored Deals
			</h3>
			<p class="bento__node-text">
				Discover personalized gift card offers that match your style and interests
			</p>
		</article>
		<article class="bento__node bento__node--4">
			<img class="bento__node-image" src="" alt="">
			<h3 class="bento__node-title">
				Friendly Chats
			</h3>
			<p class="bento__node-text">
				Connect directly with other users for smooth conversations and joyful transactions
			</p>
		</article>	
	</section>

</template>


<style lang="scss" scoped>

	@import "../assets/styles/variables.scss";

	.bento {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-columns: 4fr repeat(2, 3fr);
		grid-column-gap: calc($spacing * 2);
		grid-row-gap: calc($spacing * 2);
		width: 100%;

		&__title {
			font-family: $font-display;
			font-size: 25.75px;
			text-align: center;
		}

		article:nth-child(even) {
			align-items: flex-end;
			text-align: right;
		}

		&__node {
			border-radius: 2.5rem;
			flex-direction: column;
			align-items: flex-start;
			padding: calc($spacing * 2);
			display: flex;
			position: relative;
			justify-content: flex-end;

			&-title {
				font-family: $font-display;
				font-size: 18px;
				margin: 0;
			}

			&-text {
				font-weight: 300;
				text-wrap: balance;
				margin-block: calc($spacing / 2);
			}

			&--1, &--2 {
				min-height: 12.5rem;
			}

			&--3, &--4 {
				min-height: 25rem;
			}

			&--1 {
				background-color: $color-seafoam;
			}
			
			&--2 {
				background-color: $color-peach;
			}
			
			&--3 {
				background-color: $color-mimosa;
			}
			
			&--4 {
				background-color: $color-periwinkle;
			}
		}
	}

	@media screen and (min-width: 1280px) {
		.bento__title {
			font-size: 2vw;
		}

		.bento__node-title {
			font-size: 1.4375vw;
		}
	}

	@media screen and (max-width: 769px) {	
		.bento {
			grid-template-columns: 1fr;
		}
		
		.bento__node {	
			&--1, &--2, &--3, &--4 {
				min-height: 20rem;
			}
		}
	}

	@media screen and (min-width: 770px) {	
		.bento__title {
			grid-area: 1 / 1 / 1 / 4;
		}
		
		.bento__node {	
			&--1 {
				grid-area: 2 / 1 / 2 / 3;
			}
			
			&--2 {
				grid-area: 2 / 3 / 2 / 4;
			}
			
			&--3 {
				grid-area: 3 / 1 / 4 / 2;
			}
			
			&--4 {
				grid-area: 3 / 2 / 4 / 4;
			}
		}
	}

</style>