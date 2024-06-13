import { createStore } from "vuex"
import { offers } from "../constants/offers"

const _fetchOffers = () => {
    return new Promise((resolve) => {
        resolve(offers)
    })
}

export default createStore({
    state() {
        return {
            offers: []
        }
    },
    mutations: {
        setOffers(state, offers) {
            state.offers = offers
        }
    },
    actions: {
        async getOffers({ commit }) {
            const offers = await _fetchOffers()
            commit("setOffers", offers)
        }
    }
})