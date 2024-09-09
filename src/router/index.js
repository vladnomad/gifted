import { createWebHistory, createRouter } from "vue-router"
import { auth } from "../db"

import HomePage from "../pages/HomePage.vue"
import AboutPage from "../pages/AboutPage.vue"
import PrivacyPage from "../pages/PrivacyPage.vue"
import TermsPage from "../pages/TermsPage.vue"
import AuthPage from "../pages/AuthPage.vue"
import OffersPage from "../pages/OffersPage.vue"
import ProfilePage from "../pages/ProfilePage.vue"

const requireAuth = (_to, _from, next) => {
    if (auth.currentUser) {
        next()
    } else {
        next('/login')
    }
}

const routes = [
    { 
        path: "/", 
        name: "Home", 
        component: HomePage 
    },
    { 
        path: "/about", 
        name: "About", 
        component: AboutPage 
    },
    { 
        path: "/privacy-policy", 
        name: "Privacy", 
        component: PrivacyPage 
    },
    { 
        path: "/terms-and-conditions", 
        name: "Terms", 
        component: TermsPage 
    },
    { 
        path: "/join", 
        name: "Join", 
        component: AuthPage 
    },
    { 
        path: "/login", 
        name: "Login", 
        component: AuthPage 
    },
    { 
        path: "/offers", 
        name: "Offers", 
        component: OffersPage,
        beforeEnter: requireAuth,
    },
    { 
        path: "/profile", 
        name: "Profile", 
        component: ProfilePage,
        beforeEnter: requireAuth,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
