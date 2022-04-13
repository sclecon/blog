import Layout from '@/layout';
export default [
    {
        path: '/',
        name: 'index',
        component: Layout,
        redirect: 'index.html',
        children: [
            {
                path: 'index.html',
                component: () => import('@/pages/home/index')
            }
        ]
    },
    {
        path: '/login.html',
        name: 'user_login',
        component: () => import('@/pages/user/login'),
        meta: {
            title: '请登录您的账号',
            layout: false,
        }
    },
    {
        path: '/article',
        component: Layout,
        redirect: 'article/list.html',
        children: [
            {
                name: 'article_list',
                path: 'list.html',
                component: () => import('@/pages/article/list'),
                meta: {
                    title: '文章列表页面'
                }
            }
        ]
    },
    {
        path: '*',
        component: Layout,
        redirect: '404.html',
        children: [
            {
                name: 'not',
                path: '404.html',
                component: () => import('@/pages/error/404'),
                meta: {
                    title: '404 - 您所访问的页面已走丢'
                }
            }
        ]
    }
];