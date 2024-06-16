import { createStore } from "vuex"
import offers from "./modules/offers.js"
import users from "./modules/users.js"

const store = createStore({
    modules: {
        offers,
        users
    }
})

export default store
