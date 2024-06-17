<template>
	<section
		class="join"
		aria-labelledby="join__title"
	>
		<h1
			class="join__title"
			id="join__title"
		>
			Join
		</h1>

		<form
			class="join__form"
			@submit.prevent="joinIfValid"
		>
			<div class="join__input-container">
				<input
					v-model="form.email"
					@input="handleChange('email')"
					class="join__input"
					type="email"
					placeholder="Email"
					autocomplete="email"
				>
				<div class="join__input-error">
                    <FormError
						v-if="shouldShowError('email')"
                        :errorMessage="errors.email"
                    />
				</div>
			</div>

			<div class="join__input-container">
				<input
					v-model="form.username"
					@input="handleChange('username')"
					class="join__input"
					type="text"
					placeholder="Username"
				>
				<div class="join__input-error">
                    <FormError
						v-if="shouldShowError('username')"
                        :errorMessage="errors.username"
                    />
				</div>
			</div>

			<div class="join__input-container">
				<input
					v-model="form.password"
					@input="handleChange('password')"
					class="join__input"
					type="password"
					placeholder="Password"
					autocomplete="current-password"
				>
				<div class="join__input-error">
                    <FormError
						v-if="shouldShowError('password')"
                        :errorMessage="errors.password"
                    />
				</div>
			</div>

			<div class="join__input-container">
				<input
					v-model="form.passwordConfirmation"
					@input="handleChange('passwordConfirmation')"
					class="join__input"
					type="password"
					placeholder="Repeat the password"
				>
				<div class="join__input-error">
                    <FormError
						v-if="shouldShowError('passwordConfirmation')"
                        :errorMessage="errors.passwordConfirmation"
                    />
				</div>
			</div>

			<button
				:disabled="isSubmitDisabled"
				type="submit"
				class="btn btn--filled btn--form"
			>
				Sign Up
			</button>			
		</form>

		<button
			@click="googleSignIn"
			type="button"
			class="btn btn--hollow"
		>
			Sign In With Google
		</button>
			
		<div class="join__form-error">
			<FormError v-if="error !== ''"
				:errorMessage="error"
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

	const shouldShowError = (field) => {
		const vueField = v$?.value?.[field]

		const isDirty = vueField?.$dirty
		const isNotPending = !vueField?.$pending
		const hasError = vueField?.$error

    	return isDirty && isNotPending && hasError
  	}

	const handleChange = (field) => {
		v$.value[field].$touch()
		v$.value[field].$validate()
	}
</script>


<style lang="scss" scoped>
    @import "../assets/styles/variables.scss";
</style>
