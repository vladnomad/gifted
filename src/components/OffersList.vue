<script setup>

import { inject } from "vue"
const isMobile = inject("isMobile")

</script>


<template>

<section class="offers">
	<h2 class="offers__title">
		Latest Offers
	</h2>
	<div class="offers__container">
		<article class="offer">
			<h3 class="offer__title">
				<a class="offer__link" href="#">
					Some Title
				</a>
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					Samuelle McCatchen
				</h4>
				<p class="offer__date">
					29th February 2024
				</p>
			</div>
			<a class="offer__link" href="#">
				<img class="offer__image" alt="" src="https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
				Icon
			</a>
			<div class="offer__tags">
			<a class="btn btn--hollow" href="#" title="Some Title">
				#Nike
			</a>
			</div>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				<a class="offer__link" href="#">
					Some Title
				</a>
			</h3>
			<p class="offer__description">
				Some offer description
			</p>
			<div class="offer__author">
				<h4 class="offer__title">
					Jane Collins
				</h4>
				<p class="offer__date">
					7th March 2024
				</p>
			</div>
			<a class="offer__link" href="#">
				Icon
			</a>
			<div class="offer__tags">
				<a class="btn btn--hollow" href="#" title="Some Title">
					#Pandora
				</a>
			</div>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				<a class="offer__link" href="#">
					Some Title
				</a>
			</h3>
			<p class="offer__description">
				Some offer description
			</p>
			<div class="offer__author">
				<h4 class="offer__title">
					Jane Collins
				</h4>
				<p class="offer__date">
					7th March 2024
				</p>
			</div>
			<a class="offer__link" href="#">
				Icon
			</a>
			<div class="offer__tags">
				<a class="btn btn--hollow" href="#" title="Some Title">
					#Pandora
				</a>
			</div>
		</article>
	</div>
	<div v-if="!isMobile" class="offers__container">
		<article class="offer">
			<h3 class="offer__title">
				<a class="offer__link" href="#">
					Some Title
				</a>
			</h3>
			<div class="offer__author">
				<h4 class="offer__title">
					Samuelle McCatchen
				</h4>
				<p class="offer__date">
					29th February 2024
				</p>
			</div>
			<a class="offer__link" href="#">
				<img class="offer__image" alt="" src="https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
				Icon
			</a>
			<div class="offer__tags">
			<a class="btn btn--hollow" href="#" title="Some Title">
				#Nike
			</a>
			</div>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				<a class="offer__link" href="#">
					Some Title
				</a>
			</h3>
			<p class="offer__description">
				Some offer description
			</p>
			<div class="offer__author">
				<h4 class="offer__title">
					Jane Collins
				</h4>
				<p class="offer__date">
					7th March 2024
				</p>
			</div>
			<a class="offer__link" href="#">
				Icon
			</a>
			<div class="offer__tags">
				<a class="btn btn--hollow" href="#" title="Some Title">
					#Pandora
				</a>
			</div>
		</article>
		<article class="offer">
			<h3 class="offer__title">
				<a class="offer__link" href="#">
					Some Title
				</a>
			</h3>
			<p class="offer__description">
				Some offer description
			</p>
			<div class="offer__author">
				<h4 class="offer__title">
					Jane Collins
				</h4>
				<p class="offer__date">
					7th March 2024
				</p>
			</div>
			<a class="offer__link" href="#">
				Icon
			</a>
			<div class="offer__tags">
				<a class="btn btn--hollow" href="#" title="Some Title">
					#Pandora
				</a>
			</div>
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
	background: $color-black;
	color: $color-beige;
	display: flex;
	flex-grow: 1;
	transition: width .3s ease-in-out;
	
	&__image {
		width: 50px;
		height: 50px;
		border-radius: $radius-rounded;
	}

	&__title, &__date {
		margin-block: calc($spacing / 8);
	}

	&__link {
		color: $color-beige;
	}
}

@media screen and (hover: hover) and (min-width: 824px) {
	.offers__container {
		gap: 1px;
	}

	.offer:not(:hover) {
		width: calc(calc(25% - 4rem) - 1px);
	}
	
	.offer:hover {
		width: calc(calc(50% - 4rem) - 1px);
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