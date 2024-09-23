import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/options',
            name: 'options',
            component: () => import('../views/VueOptionsApi.vue')
        },
        {
            path: '/composition',
            name: 'composition',
            component: () => import('../views/VueCompositionApi.vue')
        },
        {
            path: '/computed',
            name: 'computed',
            component: () => import('../views/VueComputed.vue')
        },
        {
            path: '/computed_options',
            name: 'computedOptions',
            component: () => import('../views/VueComputedOptions.vue')
        }
    ]
})

export default router
