import { createStore } from "vuex"
import offers from "./modules/offers.js"

const store = createStore({
    modules: {
        offers
    }
})

export default store
