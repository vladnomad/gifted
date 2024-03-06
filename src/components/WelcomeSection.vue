<script setup></script>


<template>

<section class="welcome" aria-labelledby="welcome__title">
	<h1 class="welcome__title" id="welcome__title">
		Gift swapping made simple.
	</h1>
	<p class="welcome__text">
		For the ones who love to pick for themselves.
	</p> 
	<a class="header__nav-link btn btn--filled" href="/offers">
		Search offers on Gifted
	</a>
</section>

</template>


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.welcome {
	height: calc(85dvh - calc(($spacing * 5.25) * 2));
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 25rem;
	text-align: center;

	&__title {
		font-family: $font-display;
		font-size: 36px;
		margin: 0;
	}

	&__text {
		margin-bottom: calc($spacing * 2);
		font-weight: 300;
	}
}

@media screen and (min-width: 1280px) {
	.welcome__title {
		font-size: 2.75vw;
	}
}

</style>