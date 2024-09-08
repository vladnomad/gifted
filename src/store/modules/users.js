import { auth } from "../../db"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
 } from "firebase/auth"

export default {
    state: {
        join: {
            isProcessing: false,
            error: ""
        },
        login: {
            isProcessing: false,
            error: ""
        }
    },
    mutations: {
        SET_JOIN_IS_PROCESSING({ join }, isProcessing) {
            console.log(join, join.isProcessing, isProcessing)
            join.isProcessing = isProcessing
        },
        SET_JOIN_ERROR({ join }, error) {
            console.log(join, join.error, error)
            join.error = error
        },
        SET_LOGIN_IS_PROCESSING({ login }, isProcessing) {
            console.log(login, login.isProcessing, isProcessing)
            login.isProcessing = isProcessing
        },
        SET_LOGIN_ERROR({ login }, error) {
            console.log(login, login.error, error)
            login.error = error
        }
    },
    actions: {
        async createFirebaseUser({ commit }, { email, password }) {
            commit("SET_JOIN_IS_PROCESSING", true)
            commit("SET_JOIN_ERROR", "")

            try {
                console.log(auth)
                const userCredentials = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                sessionStorage.setItem(
                    'accessToken', 
                    userCredentials.user.accessToken
                )

                return userCredentials.user
            } catch (error) {
                commit("SET_JOIN_ERROR", error.message)
            } finally {
                commit("SET_JOIN_IS_PROCESSING", false)
            }
        },
        async loginFirebaseUser({ commit }, { email, password }) {
            commit("SET_LOGIN_IS_PROCESSING", true)
            commit("SET_LOGIN_ERROR", "")

            try {
                console.log(auth)
                const userCredentials = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                sessionStorage.setItem(
                    'accessToken', 
                    userCredentials.user.accessToken
                )

                return userCredentials.user
            } catch (error) {
                commit("SET_LOGIN_ERROR", error.message)
            } finally {
                commit("SET_LOGIN_IS_PROCESSING", false)
            }
        }
    },
    getters: {
        join: state => {
            const isProcessing = state.join.isProcessing
            const error = state.join.error

            return {
                isProcessing,
                error
            }
        },
        login: state => {
            const isProcessing = state.login.isProcessing
            const error = state.login.error

            return {
                isProcessing,
                error
            }
        }
    }
}
