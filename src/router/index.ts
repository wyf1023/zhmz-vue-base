import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../views/index.vue'),
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
