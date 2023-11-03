import { createRouter, createWebHistory } from "vue-router";

import homePageIndex from '../components/pages/home/index.vue'

import notFound from '../components/notFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: homePageIndex
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router