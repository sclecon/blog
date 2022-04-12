import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => { return import('@/pages/home/index') }
    }
]

export default new VueRouter({
    mode: 'hash',
    routes,
});