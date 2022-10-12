import { createRouter, createWebHistory } from 'vue-router';
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}
const routeConfig = [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'install',
    },
    component: () => import('@/layout/AppLayout.vue'),
    children: [
      {
        path: '/style-book',
        name: 'style-book',
        component: () => import('@/pages/StyleBook/index.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/403',
        name: '403',
        component: () => import('@/pages/NoPermission/index.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/page-not-found',
        name: 'page-not-found',
        component: () => import('@/pages/PageNotFound/index.vue'),
        meta: {
          requiresAuth: false,
        },
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/install',
    name: 'install',
    redirect: '/install/step-one',
    component: () => import('@/pages/Install/index.vue'),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: 'step-one',
        name: 'step-one',
        component: () => import('@/pages/Install/StepOne/Index.vue'),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: 'step-two',
        name: 'step-two',
        component: () => import('@/pages/Install/StepTwo/Index.vue'),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routeConfig,
});
