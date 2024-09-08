import { auth } from "../../db"
import { createUserWithEmailAndPassword } from "firebase/auth"

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
        }
    },
    actions: {
        async createFirebaseUser({ commit }, { email, password }) {
            commit("SET_JOIN_IS_PROCESSING", true)
            commit("SET_JOIN_ERROR", "")

            try {
                const userCredentials = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )
                return userCredentials.user
            } catch (error) {
                commit("SET_JOIN_ERROR", error.message)
            } finally {
                commit("SET_JOIN_IS_PROCESSING", false)
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
