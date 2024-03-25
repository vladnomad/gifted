<script setup>
	const articles = [
		{
			title: "Trusted Trades",
			text: "Enjoy peace of mind with our carefully verified gift card swapping system",
			image: "",
			alt: ""
		},
		{
			title: "Effortless Listing",
			text: "List your gift cards in a snap",
			image: "",
			alt: ""
		},
		{
			title: "Tailored Deals",
			text: "Discover personalized gift card offers that match your style and interests",
			image: "",
			alt: ""
		},
		{
			title: "Friendly Chats",
			text: "Connect directly with other users for smooth conversations and joyful transactions",
			image: "",
			alt: ""
		}
	]
</script>


<template>
	<section class="bento" aria-labelledby="bento__title">
		<h2 class="bento__title" id="bento__title">
			Explore unique ways to breath life into unused gifts with Gifted.
		</h2>

		<article
			v-for="(article, i) in articles"
			:key="i"
			:class="['bento__node', 'bento__node--' + (i + 1)]">
			<img class="bento__node-image" :src="article.image" :alt="article.alt" />
			<h3 class="bento__node-title">{{ article.title }}</h3>
			<p class="bento__node-text">{{ article.text }}</p>
		</article>
	</section>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.bento {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: calc($spacing * 2);
		grid-row-gap: calc($spacing * 2);
		width: 100%;
		margin-block: calc($spacing * 16) calc($spacing * 4);

		&__title {
			font-family: $font-display;
			font-size: 26px;
			text-wrap: balance;
			text-align: center;
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
				min-width: 14rem;
			}
			
			&--3 {
				background-color: $color-mimosa;
			}
			
			&--4 {
				background-color: $color-periwinkle;
			}
		}
	}

	@media screen and (min-width: 824px) {	
		.bento {
			grid-template-columns: 4fr repeat(2, 3fr);
		}

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

	@media screen and (min-width: 1280px) {
		.bento__title {
			font-size: 2vw;
		}

		.bento__node-title {
			font-size: 1.4375vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.bento__title {
			font-size: 32px;
		}

		.bento__node-title {
			font-size: 22px;
		}
	}

	@media screen and (max-width: 824px) {	
		.bento__node {	
			&--1, &--2, &--3, &--4 {
				min-height: 20rem;
			}
		}
	}
</style>