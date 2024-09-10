import { createWebHistory, createRouter } from "vue-router"
import { auth } from "../db"

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
        component: () => import("../pages/HomePage.vue") 
    },
    { 
        path: "/about", 
        name: "About", 
        component: () => import("../pages/AboutPage.vue") 
    },
    { 
        path: "/privacy-policy", 
        name: "Privacy", 
        component: () => import("../pages/PrivacyPage.vue") 
    },
    { 
        path: "/terms-and-conditions", 
        name: "Terms", 
        component: () => import("../pages/TermsPage.vue") 
    },
    { 
        path: "/join", 
        name: "Join", 
        component: () => import("../pages/AuthPage.vue") 
    },
    { 
        path: "/login", 
        name: "Login", 
        component: () => import("../pages/AuthPage.vue") 
    },
    { 
        path: "/offers", 
        name: "Offers", 
        component: () => import("../pages/OffersPage.vue"),
        beforeEnter: requireAuth,
    },
    { 
        path: "/profile", 
        name: "Profile", 
        component: () => import("../pages/ProfilePage.vue"),
        beforeEnter: requireAuth,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
