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
            },
            {
                path: '404.html',
                name: 'not_found',
                component: () => import('@/pages/error/404'),
                meta: {
                    title: '404 - 您访问的页面走丢了'
                }
            }
        ]
    },
    {
        path: '/login.html',
        name: 'user_login',
        component: () => import('@/pages/user/login'),
        meta: {
            title: '请登录您的账号',
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
            },
            {
                name: 'article_detail',
                path: 'detail.html',
                component: () => import('@/pages/article/detail'),
                meta: {
                    title: '文章详情页面'
                }
            }
        ]
    },
    {
        path: '*',
        redirect: "404.html"
    }
];