import { createRouter, createWebHistory } from 'vue-router';

// Define routes
const routes = [
    // Home route
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    },

    // Laptop routes
    {
        path: '/laptops',  // Ganti dengan lowercase untuk konsistensi
        name: 'laptops.index',
        component: () => import(/* webpackChunkName: "index" */ '../views/laptop/index.vue'),
    },
    {
        path: '/laptops/create',
        name: 'laptops.create',
        component: () => import(/* webpackChunkName: "create" */ '../views/laptop/create.vue'),
    },
    {
        path: '/laptops/edit/:id',
        name: 'laptops.edit',
        component: () => import(/* webpackChunkName: "edit" */ '../views/laptop/edit.vue'),
    },

    // Smartphone routes
    {
        path: '/smartphones',  // Ganti dengan lowercase untuk konsistensi
        name: 'smartphones.index',
        component: () => import(/* webpackChunkName: "index" */ '../views/smartphone/index.vue'),
    },
    {
        path: '/smartphones/create',
        name: 'smartphones.create',
        component: () => import(/* webpackChunkName: "create" */ '../views/smartphone/create.vue'),
    },
    {
        path: '/smartphones/edit/:id',
        name: 'smartphones.edit',
        component: () => import(/* webpackChunkName: "edit" */ '../views/smartphone/edit.vue'),
    },
];

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes,  // <-- routes
});

export default router;
