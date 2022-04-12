import Vue from "vue";
import VueRouter from "vue-router";
import client from "@/config"
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/pages/home/index')
    },
    {
        path: '/lo',
        component: () => import('@/pages/user/login'),
        meta: {
            title: '请登录您的账号',
            layout: false,
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = typeof to.meta.title === 'undefined' ? client.title : to.meta.title;
    Vue.prototype.layout = typeof to.meta.layout === 'undefined' ? true : to.meta.layout;
    next();
});

export default router;