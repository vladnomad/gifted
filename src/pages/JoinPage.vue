<template>
	<section
		class="join"
		aria-labelledby="join__title"
	>
		<div class="join__form-container">
			<h1
				class="join__title"
				id="join__title"
			>
				Join Gifted
			</h1>

			<form
				class="join__form"
				@submit.prevent="joinIfValid"
			>
				<div class="join__input-container">
					<input
						v-model="form.email"
						@input="handleChange('email')"
						:class='{
							"join__input": true,
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

				<div class="join__input-container">
					<input
						v-model="form.username"
						@input="handleChange('username')"
						:class='{
							"join__input": true,
							"is-invalid": isFieldInvalid("username"),
							"is-valid": isFieldValid("username")
						}'
						type="text"
						placeholder="Username"
						autocomplete="username"
					>
					<FormError
						v-if="isFieldInvalid('username')"
						:errorMessage="errors.username"
					/>
				</div>

				<div class="join__input-container">
					<input
						v-model="form.password"
						@input="handleChange('password')"
						:class='{
							"join__input": true,
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

				<div class="join__input-container">
					<input
						v-model="form.passwordConfirmation"
						@input="handleChange('passwordConfirmation')"
						:class='{
							"join__input": true,
							"is-invalid": isFieldInvalid("passwordConfirmation"),
							"is-valid": isFieldValid("passwordConfirmation")
						}'
						type="password"
						placeholder="Repeat the password"
					>
					<FormError
						v-if="isFieldInvalid('passwordConfirmation')"
						:errorMessage="errors.passwordConfirmation"
					/>
				</div>		
			</form>

			<button
				:disabled="isSubmitDisabled"
				type="submit"
				class="btn btn--filled btn--form"
			>
				Join
			</button>	

			<button
				@click="googleSignIn"
				type="button"
				class="btn btn--hollow btn--form"
			>
				Sign In With Google
			</button>
				
			<FormError v-if="error !== ''"
				:errorMessage="error"
			/>
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
		username: "",
		password: "",
		passwordConfirmation: ""
	})

	const rules = {
		email: { 
			required, 
			email 
		},
		username: { 
			required 
		},
		password: { 
			required 
		},
		passwordConfirmation: {
			required,
			sameAs: helpers.withMessage(
				"Must be same as the password", 
				sameAs(computed(() => form.password))
			)
		}
	}

	const router = useRouter()
	const v$ = useVuelidate(rules, form)

    const { createFirebaseUser } = useStoreActions()
	const { join } = useStoreGetters()

	const isProcessing = computed(() => join.value.isProcessing)
	const error = computed(() => join.value.error)
	
	watch(isProcessing, (curr, prev) => {
		if ((!curr && prev) && error.value === "") {
			router.push("/")
		}
	})

	const errors = computed(() => useValidationErrors(v$.value.$errors))
	const isFormValid = computed(() => !v$.value.$invalid);
	const isSubmitDisabled = computed(() => isProcessing.value || !isFormValid.value);

	const joinIfValid = async () => {
		v$.value.$touch()
		await v$.value.$validate()

		if (!isFormValid.value) return

		await createFirebaseUser(form)
	}

	const googleSignIn = () => console.log("google")
	
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
    @import "../assets/styles/variables.scss";

	.join {
		display: flex;
		margin-top: calc($spacing * 4);

		&__title {
			text-align: center;
			font-family: $font-display;
			font-size: 30px;
		}

		&__form {
			display: flex;
			flex-direction: column;
			gap: 23px;
			margin-bottom: calc($spacing * .5);

			&-container {
				width: 290px;
				height: 513px;
				display: flex;
				flex-direction: column;
				gap: 26px;
				margin-left: calc($spacing * 4);
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
				margin-left: calc($spacing * 4);
			}
		}
	}

	@media screen and (min-width: 893px) {
		.join {
			margin-top: 0;
			align-items: center;
			height: calc(100dvh - ((1.25rem + 52px) * 2));
		}
	}
</style>
