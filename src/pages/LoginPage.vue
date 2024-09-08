<template>
    <section 
        class="login"
        aria-labelledby="login__title"
    >
        <div class="login__form-container">
            <h1 
                class="login__title"
                id="login__title"
            >
                Login to Gifted
            </h1>
            
            <form 
                class="login__form"
                @submit.prevent="loginIfValid"
            >
                <div class="login__input-container">
                    <input
                        v-model="form.email"
                        @input="handleChange('email')"
                        :class='{
                            "login__input": true,
                            "is-invalid": isFieldInvalid("email"),
                            "is-valid": isFieldValid("email")
                        }'
                        type="email"
                        placeholder="Email"
                        autocomplete="email"
                    >
                    <FormError
                        v-if="isFieldInvalid('email')"
                        :errorMessage="errors.email"
                    /> 
                </div>

                <div class="login__input-container">
                    <input
                        v-model="form.password"
                        @input="handleChange('password')"
                        :class='{
                            "login__input": true,
                            "is-invalid": isFieldInvalid("password"),
                            "is-valid": isFieldValid("password")
                        }'
                        type="password"
                        placeholder="Password"
                        autocomplete="new-password"
                    >
                    <FormError
                        v-if="isFieldInvalid('password')"
                        :errorMessage="errors.password"
                    />
                </div>

                <button
                    :disabled="isSubmitDisabled"
                    type="submit"
                    class="btn btn--filled btn--form"
                >
                    Login
                </button>	
            </form>
                    
            <FormError v-if="error !== ''"
                :errorMessage="error"
            />

            <p class="login__links">
                <a href="#">
                    Sign In With Google
                </a>
                &nbsp;
                <a href="#">
                    Sign Up
                </a> 
                &nbsp;·&nbsp;
                <a href="#">
                    Need Help?
                </a>
            </p>
        </div>

        <div class="join__image-container">
			<img
				class="join__image"
				:src="joinPage"
				alt=""
				loading="lazy"
			/>
		</div>
    </section>
</template>


<script setup>
    import { computed, reactive, watch } from "vue"
	import { useRouter } from "vue-router"
	import useVuelidate from "@vuelidate/core"
	import { required, sameAs, helpers, email } from "@vuelidate/validators"

	import { useStoreActions } from "../store/helpers/useStoreActions"
	import { useStoreGetters } from "../store/helpers/useStoreGetters"
	import { useValidationErrors } from "../composables/useValidationErrors"

	import FormError from "../components/UI/FormError.vue"
	import joinPage from "../assets/img/illustrations/joinPage.png"

    const form = reactive({
        email: "",
        password: ""
    })

    const rules = {
        email: { 
            required, 
            email 
        },
        password: { 
            required 
        }
    }

    const router = useRouter()
    const v$ = useVuelidate(rules, form)

    const { loginFirebaseUser } = useStoreActions()
    const { login } = useStoreGetters()

	const isProcessing = computed(() => login.value.isProcessing)
	const error = computed(() => login.value.error)

    watch(isProcessing, (curr, prev) => {
		if ((!curr && prev) && error.value === "") {
			router.push("/")
		}
	})

    const errors = computed(() => useValidationErrors(v$.value.$errors))
    const isFormValid = computed(() => !v$.value.$invalid);
    const isSubmitDisabled = computed(() => isProcessing.value || !isFormValid.value);

    const loginIfValid = async () => {
		v$.value.$touch()
		await v$.value.$validate()

		if (!isFormValid.value) return

		await loginFirebaseUser(form)
    }

	const vueFieldChecks = (field) => {
		const vueField = v$?.value?.[field]
		const isDirty = vueField?.$dirty
		const isNotPending = !vueField?.$pending
		const hasError = vueField?.$error

		return {
			isDirty,
			isNotPending,
			hasError
		}
	}

	const isFieldInvalid = (field) => {
		const { 
			isDirty, 
			isNotPending, 
			hasError
		} = vueFieldChecks(field)

    	return isDirty && isNotPending && hasError
  	}

	const isFieldValid = (field) => {
		const { 
			isDirty, 
			isNotPending, 
			hasError
		} = vueFieldChecks(field)

    	return isDirty && isNotPending && !hasError
	}

	const handleChange = (field) => {
		v$.value[field].$touch()
		v$.value[field].$validate()
	}
</script>


<style lang="scss" scoped>
	#app {
		max-height: 100dvh;
	}
</style>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.login {
		display: flex;
		width: 310px;
		height: calc(100dvh - (1.25rem + 52px));
		flex-direction: column;

		&__title {
			text-align: center;
			font-family: $font-display;
			font-size: 30px;
			margin-top: 0;
		}

		&__form {
			display: flex;
			flex-direction: column;
			gap: 30px;
			margin-bottom: calc($spacing * .5);

			&-container {
				display: flex;
				flex-direction: column;
				gap: 26px;
				margin-block: auto;
				padding-bottom: 3rem;
			}
		}

		&__input {
			width: calc(calc(100% - 24px) - 2px);
			height: calc(calc(100% - 21.5px) - 2px);
			border-radius: $radius;
			padding: 10.75px 12px;
			border-width: 1px;
			border-style: solid;
			border-color: $color-shadow;
			font-weight: 300;

			&::placeholder {
				font-weight: 300;
				font-family: $font-sans-serif;
			}

			&.is-invalid {
				border-color: $color-error;
			}

			&.is-valid {
				border-color: $color-success;
			}

			&-container {
				height: 37.5px;
				position: relative;
			}
		}

		&__image {

			&-container {
				height: 513px;
			}
		}
	}

	@media screen and (max-width: 893px) {
		.login__image-container {
			display: none;
		}
	}

	@media screen and (min-width: 893px) {
		.login {
			flex-direction: row;
			margin-top: calc($spacing * 4);
			align-items: center;
			width: auto;
			height: calc(100dvh - ((1.25rem + 52px) * 2));

			&__form {

				&-container {
					height: 513px;
					width: 290px;
					margin-left: calc($spacing * 4);
				}
			}

			&__image {

				&-container {
					margin-left: calc($spacing * 4);
				}
			}
		}
	}
</style>
