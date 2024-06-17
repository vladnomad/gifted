<template></template>
<script></script>
<style></style>
<!-- <template>
    <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">
            Login
        </h3>
        
        <p class="subtitle has-text-grey">
            Please login to proceed.
        </p>
        
        <form @submit.prevent="login">
            <div class="field">
                <div class="control">
                    <input
                        v-model="form.email"
                        class="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autofocus
                        autocomplete="email"
                    >
                    <FormErrors 
                        :errors="v$.form.email.$errors" 
                    />
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input
                        v-model="form.password"
                        class="input is-large"
                        type="password"
                        placeholder="Your Password"
                        autocomplete="current-password"
                    >
                    <FormErrors 
                        :errors="v$.form.password.$errors" 
                    />
                </div>
            </div>

            <button
                :disabled="isProcessing"
                type="submit"
                class="button is-block is-info is-large is-fullwidth"
            >
                Sign In
            </button>
        </form>

        <p class="has-text-grey">
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
</template>


<script setup>
    import { reactive, watch } from "vue"
    import { useRouter } from "vue-router"
    import { useStore } from "vuex"
    import useAuth from "../composition/useAuth"
    import useVuelidate from "@vuelidate/core"
    import { required, email } from "@vuelidate/validators"
    import FormErrors from "../components/FormErrors.vue"

    const form = reactive({
        email: "",
        password: ""
    })

    const rules = {
        form: {
            email: { 
                required, 
                email 
            },
            password: { 
                required 
            }
        }
    }

    const v$ = useVuelidate(rules, { form })
    const { isAuthenticated, isProcessing } = useAuth()
    const router = useRouter()
    const store = useStore()

    watch(isAuthenticated, (isAuth) => {
        if (isAuth) {
            router.push("/")
        }
    })

    const login = async () => {
        const isValid = await v$.$validate()
        if (isValid) store.dispatch("user/login", form)
    }
</script>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";
</style> -->
