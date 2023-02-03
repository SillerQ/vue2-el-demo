import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/productsview',
                name: 'productsview',
                component: () => import('../views/ProductsView.vue'),
                children: [
                    {
                        path: '/overview',
                        name: 'overview',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import('../views/OverView.vue'),
                    },
                    {
                        path: '/dataview',
                        name: 'dataview',
                        component: () => import('../views/SettingView.vue'),
                    },
                    {
                        path: '/overview',
                        name: 'settingview',
                        component: () => import('../views/SettingView.vue'),
                    },
                ],
            },
            {
                path: '/orderManagementview',
                name: 'orderManagementview',
                component: () => import('../views/OrderManagementView.vue'),
            },
        ],
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/SignIn.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignUp.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
