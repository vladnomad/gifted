<template>
	<header class="header">
		<div class="header__container">
			<div class="header__title-wrapper">
				<RouterLink
					class="header__title"
					to="/"
				>
					<LogoSVG />
					Gifted
				</RouterLink>
			</div>

			<nav class="header__nav">
				<RouterLink
					v-if="isMobile"
					class="header__nav-login"
          			:to="username ? 'profile' : 'login'"
				>
         			<span v-if="username" class="header__nav-username">
						{{ username }}
					</span>
					<UserSVG />
				</RouterLink>

				<div :class='{
					"header__nav-links": true,
					"is-active": isActive,
					"is-mobile": isMobile
				}'>
					<RouterLink to="about">
						About
					</RouterLink>
					<RouterLink
						v-if="!isMobile"
						class="header__nav-login"
						:to="username ? 'profile' : 'login'"
					>
            			<span v-if="username" class="header__nav-username">
							{{ username }}
						</span>
						<UserSVG />
					</RouterLink>
					<RouterLink
						class="btn btn--filled"
						to="join"
					>
						Join Now
					</RouterLink>
				</div>

				<div
					ref="menuRef"
					v-if="isMobile"
					class="header__nav-menu"
				>
					<div
						@click="toggleMenu"
						:class='{
							"header__nav-menu_btn": true,
							"is-active": isActive,
							"is-not-active": !isActive
						}'
					>
						<span
							v-for="i in 3"
							:key="'header__nav-menu_btn_span--' + i"
						></span>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>


<script setup>
	import { ref, inject, onMounted, onBeforeUnmount } from "vue"
	import { getAuth, onAuthStateChanged } from "firebase/auth"
	import { RouterLink } from "vue-router"
	import LogoSVG from "../assets/svg/LogoSVG.vue"
	import UserSVG from "../assets/svg/UserSVG.vue"

	const menuRef = ref(null)
	const username = ref(null)
	const isActive = ref(false)
	const isMobile = inject("isMobile")

	const toggleMenu = () => {
		isActive.value = !isActive.value
	}

	const closeMenuIfClickedOutside = (event) => {
		if (menuRef.value && !menuRef.value.contains(event.target)) {
			isActive.value = false;
		}
	};

	onMounted(() => {
		const auth = getAuth();

		onAuthStateChanged(auth, (user) => {
			if (user) {
				username.value = user.displayName || "";
			} else {
				username.value = "";
			}
		});

		document.addEventListener("click", closeMenuIfClickedOutside);
	});

	onBeforeUnmount(() => {
		document.removeEventListener("click", closeMenuIfClickedOutside);
	});
</script>


<style lang="scss" scoped>
	@use "../assets/styles/variables.scss" as *;
	@import "../assets/styles/keyframes.css";

	.header {
		position: sticky;
		top: 1.25rem;
		z-index: 7;
		grid-row: primary-header;
		grid-column: main;

		&__container {
			display: grid;
			min-height: 40px;
			width: calc(100dvw - 5rem);
			grid-template-columns: 
				calc($spacing * 6) 
				minmax(calc($spacing * 3), auto) 
				calc($spacing * 24)
			;
		}

		&__title {
			display: flex;
			align-items: center;
			font-size: 17px;
			
			&-wrapper {
				display: flex;
				align-items: center;
			}

			&-logo {
				width: 2.5vw;
				height: auto;
				margin-right: calc($spacing / 4);
			}
		}

		&__nav {
			display: flex;
			grid-column: 3;
			gap: 1rem;
			justify-content: flex-end;
			align-items: center;

			&-links {
				display: flex;
				gap: calc($spacing * 2);
				align-items: center;

        & .btn {
          white-space: nowrap;
        }

				&.is-mobile {
					position: absolute;
					top: 3.5rem;
					right: -0.5rem;
					padding: 1.5rem;
					background-color: $color-beige;
					border: 1px solid $color-black;
					border-radius: 1.5rem;
					box-shadow: -1px 1px 5px -2px $color-black;
					opacity: 0;
					transform: scale(.9375);
					transition: opacity .2s ease-in, transform .15s ease-in;

					&.is-active {
						transform: scale(1);
						opacity: 1;
					}
				}
			}

			&-login {
				display: flex;
			}

      &-username {
        margin-right: 8px;
      }
			
			&-menu {
				border-radius: 2px;
				position: relative;
				height: 14px;
				width: 20px;

				&_btn {
					position: relative;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 20px;
					cursor: pointer;

					span {
						display: block;
						width: 100%;
						box-shadow: 0 2px 6px 0 rgba(0,0,0,0.3);
						border-radius: 3px;
						height: 2px;
						background: $color-black;
						transition: all .3s;
						position: relative;
					}

					span + span {
						margin-top: 4px;
					}

					&.is-not-active span:nth-child(1) {
						animation: ease .7s headerComponent_10 forwards;
					}

					&.is-active span:nth-child(1) {
						animation: ease .7s headerComponent_11 forwards;
					}

					.is-not-active span:nth-child(2) {
						animation: ease .7s headerComponent_20 forwards;
					}

					&.is-active span:nth-child(2) {
						animation: ease .7s headerComponent_21 forwards;
					}

					&.is-not-active span:nth-child(3) {
						animation: ease .7s headerComponent_30 forwards;
					}

					&.is-active span:nth-child(3) {
						animation: ease .7s headerComponent_31 forwards;
					}
				}
			}
		}
	}

	.logo-svg,
	.user-svg {
		width: 23px;
		height: auto;
	}

	.logo-svg {
		margin-top: -3px;
		margin-right: 3px;
	}

	@media screen and (min-width: 1238px) {
		.header__title {
			font-size: 1.375vw;
		}
		.logo-svg,
		.user-svg {
			width: 1.6875vw;
		}
	}

	@media screen and (min-width: 1590px) {
		.header__title {
			font-size: 22px;
		}
		.logo-svg,
		.user-svg {
			width: 26px;
		}
	}
	
	@media screen and (max-width: 892px) {
		.header__container {
			grid-template-columns: 
				calc($spacing * 6) 
				minmax(calc($spacing * 3), auto) 
				calc($spacing * 6)
			;
		}
	}
</style>
