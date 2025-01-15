import { createWebHistory, createRouter } from "vue-router"
import { auth } from "../db"

const requireAuth = (_to, _from, next) => {
    if (auth.currentUser.accessToken || auth.accessToken) {
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
        component: () => import("../pages/InDevelopmentPage.vue")
    },
    { 
        path: "/privacy-policy", 
        name: "Privacy", 
        component: () => import("../pages/InDevelopmentPage.vue")
    },
    { 
        path: "/terms-and-conditions", 
        name: "Terms", 
        component: () => import("../pages/InDevelopmentPage.vue")
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
        component: () => import("../pages/InDevelopmentPage.vue"),
        beforeEnter: requireAuth,
    },
    { 
        path: "/profile", 
        name: "Profile", 
        component: () => import("../pages/InDevelopmentPage.vue"),
        beforeEnter: requireAuth,
    },
]

const router = createRouter({
    history: createWebHistory("/gifted/"),
    routes
})

export default router
