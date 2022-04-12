import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

const constRouter = [
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('@/pages/user/login.vue')
    }
]

const createRouter = () => new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: constRouter
})

const router = createRouter()

export default router