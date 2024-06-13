import { createWebHistory, createRouter } from "vue-router"

import HomePage from "../pages/HomePage.vue"
import AboutPage from "../pages/AboutPage.vue"
import JoinPage from "../pages/JoinPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import OffersPage from "../pages/OffersPage.vue"
import PrivacyPage from "../pages/PrivacyPage.vue"
import TermsPage from "../pages/TermsPage.vue"

const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/about", name: "About", component: AboutPage },
    { path: "/join", name: "Join", component: JoinPage },
    { path: "/login", name: "Login", component: LoginPage },
    { path: "/offers", name: "Offers", component: OffersPage },
    { path: "/privacy-policy", name: "Privacy", component: PrivacyPage },
    { path: "/terms-and-conditions", name: "Terms", component: TermsPage }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
