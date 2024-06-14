import { createStore } from "vuex"
import { db } from "../db"
import { getDocs, query, orderBy, collection } from "firebase/firestore"

const store = createStore({
    state: {
        offers: []
    },
    mutations: {
        SET_OFFERS(state, offers) {
            state.offers = offers
        }
    },
    actions: {
        async fetchLatestOffers({ commit }) {
            try {
                const offersCollection = collection(db, "offers")
                const q = query(offersCollection, orderBy("date", "desc"))
                const querySnapshot = await getDocs(q)

                const offers = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                commit("SET_OFFERS", offers)
            } catch (error) {
                console.error("Error fetching offers:", error)
            }
        }
    },
    getters: {
        latestOffers: state => state.offers
    }
})

export default store
