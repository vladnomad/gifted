import { db } from "../../db"
import { getDocs, query, orderBy, collection } from "firebase/firestore"

export default {
    state: {
        latestOffers: []
    },
    mutations: {
        SET_LATEST_OFFERS(state, latestOffers) {
            state.latestOffers = latestOffers
        }
    },
    actions: {
        async fetchLatestOffers({ commit }) {
            try {
                const offersCollection = collection(db, "offers")
                const q = query(offersCollection, orderBy("date", "desc"))
                const querySnapshot = await getDocs(q)

                const latestOffers = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                commit("SET_LATEST_OFFERS", latestOffers)

                sessionStorage.setItem(
                    "latestOffers", 
                    JSON.stringify(latestOffers)
                )

                sessionStorage.setItem(
                    "latestOffersTimestamp", 
                    Date.now()
                )
            } catch (error) {
                console.error("Error fetching offers:", error)
            }
        },
        loadLatestOffers({ commit }) {
            const cachedOffers = sessionStorage.getItem("latestOffers")

            if (cachedOffers) {
                commit("SET_LATEST_OFFERS", JSON.parse(cachedOffers))
            }
        }
    },
    getters: {
        latestOffers: state => state.latestOffers
    }
}
