import Vue from "vue";
import VueRouter from "vue-router";
import client from "@/config"
import routes from './pages';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = typeof to.meta.title === 'undefined' ? client.title : to.meta.title;
    next();
});

export default router;