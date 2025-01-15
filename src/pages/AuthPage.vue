<template>
	<section 
        class="auth" 
        aria-labelledby="auth__title"
    >
		<div class="auth__form-container">
			<h1 
                class="auth__title" 
                id="auth__title"
            >
				{{ isLoginPage ? "Log in to Gifted" : "Join Gifted" }}
			</h1>

			<form 
                class="auth__form" 
                @submit.prevent="handleSubmit"
            >
				<div class="auth__input-container">
					<input
						v-model="form.email"
						@input="handleChange('email')"
						:class="inputClass('email')"
						type="email"
						placeholder="Email"
						autocomplete="email"
					>
					<FormError 
                        v-if="isFieldInvalid('email')" 
                        :errorMessage="errors.email" 
                    />
				</div>

				<div 
                    v-if="!isLoginPage" 
                    class="auth__input-container"
                >
					<input
						v-model="form.username"
						@input="handleChange('username')"
						:class="inputClass('username')"
						type="text"
						placeholder="Username"
						autocomplete="username"
					>
					<FormError 
                        v-if="isFieldInvalid('username')" 
                        :errorMessage="errors.username" 
                    />
				</div>

				<div class="auth__input-container">
					<input
						v-model="form.password"
						@input="handleChange('password')"
						:class="inputClass('password')"
						type="password"
						placeholder="Password"
						autocomplete="new-password"
					>
					<FormError 
                        v-if="isFieldInvalid('password')" 
                        :errorMessage="errors.password" 
                    />
				</div>

				<div 
                    v-if="!isLoginPage" 
                    class="auth__input-container"
                >
					<input
						v-model="form.passwordConfirmation"
						@input="handleChange('passwordConfirmation')"
						:class="inputClass('passwordConfirmation')"
						type="password"
						placeholder="Repeat the password"
					>
					<FormError
						v-if="isFieldInvalid('passwordConfirmation')"
						:errorMessage="errors.passwordConfirmation"
					/>
				</div>

				<button 
                    :disabled="isSubmitDisabled" 
                    type="submit" 
                    class="btn btn--filled btn--form"
                >
					{{ isLoginPage ? "Log in" : "Join now" }}
				</button>

				<button
                    @click="googleSignIn" 
                    type="button" 
                    class="btn btn--hollow btn--form"
                >
					Sign In With Google
				</button>
			</form>

			<FormError 
                v-if="error !== ''" 
                :errorMessage="error" 
            />

			<p class="auth__link">
				{{ isLoginPage 
                    ? "Don't have a Gifted account?" 
                    : "Already have a Gifted account?" 
                }}
				<a :href="isLoginPage ? '/gifted/join' : '/gifted/login'">
					{{ isLoginPage ? "Join now" : "Log in" }}
				</a>
			</p>
		</div>

		<div class="auth__image-container">
			<img 
                class="auth__image" 
                :src="authPage" 
                alt="" 
                loading="lazy" 
            />
		</div>
	</section>
</template>


<script setup>
    import { computed, reactive, watch } from "vue"
    import { useRouter, useRoute } from "vue-router"
    import { required, sameAs, helpers, email } from "@vuelidate/validators"
    import useVuelidate from "@vuelidate/core"

    import { useStoreActions } from "../store/helpers/useStoreActions"
	import { useStoreGetters } from "../store/helpers/useStoreGetters"
	import { useValidationErrors } from "../composables/useValidationErrors"

    import FormError from "../components/UI/FormError.vue"
    import authPage from "../assets/img/illustrations/auth-page.webp"

    const router = useRouter()
    const route = useRoute()
    const isLoginPage = computed(() => route.name === "Login")

    const form = reactive({
        email: "",
        username: "",
        password: "",
        passwordConfirmation: "",
    })

    const rules = computed(() => ({
        email: { 
            required, 
            email,
        },
        username: isLoginPage.value 
            ? {} 
            : { required },
        password: { 
            required,
        },
        passwordConfirmation: isLoginPage.value
            ? {}
            : { 
                required, 
                sameAs: helpers.withMessage(
                    "Must be same as the password", 
                    sameAs(computed(() => form.password))
                ), 
            },
    }))

    const v$ = useVuelidate(rules, form)

    const { loginFirebaseUser, createFirebaseUser } = useStoreActions()
	const { login, join } = useStoreGetters()

    const auth = isLoginPage.value 
        ? login 
        : join

    const authAction = isLoginPage.value 
        ? loginFirebaseUser 
        : createFirebaseUser

	const isProcessing = computed(() => auth.value.isProcessing)
	const error = computed(() => auth.value.error)
	
    watch(isProcessing, (curr, prev) => {
		if ((!curr && prev) && error.value === "") {
			router.push("/")
		}
    })

    const errors = computed(() => useValidationErrors(v$.value.$errors))
    const isFormValid = computed(() => !v$.value.$invalid)
    const isSubmitDisabled = computed(() => isProcessing.value || !isFormValid.value)

    const handleSubmit = async () => {
        v$.value.$touch()
        await v$.value.$validate()

        if (!isFormValid.value) return

        await authAction(form)
		await router.push('/')
    }

    const vueFieldChecks = (field) => {
        const vueField = v$?.value?.[field]
        const isDirty = vueField?.$dirty
        const isNotPending = !vueField?.$pending
        const hasError = vueField?.$error

        return {
            isDirty,
            isNotPending,
            hasError,
        }
    }

	  const isFieldInvalid = (field) => {
      const {
        isDirty,
        isNotPending,
        hasError,
      } = vueFieldChecks(field)

    	return isDirty && isNotPending && hasError
  	}

    const isFieldValid = (field) => {
		const {
			isDirty,
			isNotPending,
			hasError,
		} = vueFieldChecks(field)

		return isDirty && isNotPending && !hasError
    }

    const inputClass = (field) => ({
        "auth__input": true,
        "is-invalid": isFieldInvalid(field),
        "is-valid": isFieldValid(field),
    })

    const handleChange = (field) => {
        v$.value[field].$touch()
        v$.value[field].$validate()
    }

    const googleSignIn = () => {
        // console.log("Google Sign-In")
    }
</script>


<style lang="scss" scoped>
	@use "../assets/styles/variables.scss" as *;

    .auth {
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

            &-container {
                display: flex;
                flex-direction: column;
                gap: 26px;
                margin-block: auto;
                padding-bottom: 3rem;
                justify-content: center;
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

        &__link {
            font-size: 13px;
            text-align: center;
            margin: 0;

            a {
                text-decoration: underline;
            }
        }
    }

    @media screen and (max-width: 893px) {
        .auth__image-container {
            display: none;
        }
    }

    @media screen and (min-width: 893px) {
        .auth {
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
