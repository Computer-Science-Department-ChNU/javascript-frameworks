import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '../views/PageMain.vue'
import ProductList from '../views/PageProductList.vue'
import Product from '../views/PageProduct.vue'
import Contact from '../views/PageContacts.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            /*
                Цей підхід використовує синхронне імпортування,
                коли компонент імпортується відразу під час завантаження програми.
                Усі компоненти, імпортовані таким чином, будуть включені до основного
                JavaScript файлу застосунку.

                Синхронне завантаження добре підходить
                для основних або часто використовуваних компонентів,
                які мають бути доступними відразу.
             */
            component: HomeView
        },
        {
            path: '/',
            name: Main,
            component: Main
        },
        {
            path: '/products',
            name: ProductList,
            component: ProductList
        },
        {
            path: '/products/:id',
            name: Product,
            component: Product,
            props: true
        },
        {
            path: '/contact',
            name: Contact,
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            /*
                Цей підхід використовує асинхронне завантаження.
                Компонент завантажується тільки тоді, коли користувач відвідує відповідний маршрут.
                Це робиться через функцію, яка повертає динамічний імпорт.
                При використанні цього методу, для кожного такого компонента
                створюється окремий "chunk" (About.[hash].js), який завантажується лише при необхідності.

                Асинхронне завантаження доцільно використовувати
                для другорядних або рідко використовуваних компонентів,
                щоб оптимізувати продуктивність застосунку.
             */
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/old-path',
            redirect: '/new-path'
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
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
        },
        {
            path: '/props',
            name: 'props',
            component: () => import('../views/VueProps.vue')
        },
        {
            path: '/emit',
            name: 'emit',
            component: () => import('../views/VueEmit.vue')
        },
        {
            path: '/emit-props',
            name: 'emitProps',
            component: () => import('../views/VueEmitProps.vue')
        },
        {
            path: '/watch',
            name: 'watch',
            component: () => import('../views/VueWatch.vue')
        },
        {
            path: '/watch-effect',
            name: 'watchEffect',
            component: () => import('../views/VueWatchEffect.vue')
        },
        {
            path: '/modal',
            name: 'modal',
            component: () => import('../views/VueModal.vue')
        },
        {
            path: '/slot_base',
            name: 'slot_base',
            component: () => import('../views/VueSlotBase.vue')
        },
        {
            path: '/slot_bad',
            name: 'slot_bad',
            component: () => import('../views/VueSlotBad.vue')
        },
        {
            path: '/slot_dynamic_components',
            name: 'slot_dynamic_components',
            component: () => import('../views/VueSlotDynamicComponents.vue')
        },
        {
            path: '/slot_good',
            name: 'slot_good',
            component: () => import('../views/VueSlotGood.vue')
        },
        {
            path: '/popup',
            name: 'popup',
            component: () => import('../views/VuePopup.vue')
        },
        {
            path: '/simple_routing',
            name: 'simple_routing',
            component: () => import('../views/VueSimpleRouting.vue')
        },
        {
            path: '/pinia_store',
            name: 'pinia_store',
            component: () => import('../views/VuePiniaStore.vue')
        },
        {
            path: '/pinia_cart',
            name: 'pinia_cart',
            component: () => import('../views/VuePiniaCart.vue')
        },
        {
            path: '/axios',
            name: 'axios',
            component: () => import('../views/VueAxiosExample.vue')
        }
    ]
})

export default router
