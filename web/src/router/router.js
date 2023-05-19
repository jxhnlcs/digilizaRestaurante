import { createRouter, createWebHistory } from 'vue-router'
import multiguard from 'vue-router-multiguard';
import validarToken from '../middleware/validarToken';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../login/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('../register/Register.vue'),
    },

    {
      path: '/home',
      component: () => import('../views/Home.vue'),
      beforeEnter: multiguard([validarToken])

    },

    {
      path: '/main',
      component: () => import('../views/Main.vue'),
      beforeEnter: multiguard([validarToken])
    },

    {
      path: '/sobre',
      component: () => import('../views/Sobre.vue'),
      meta: { requiresAuth: true },
    },
  ],
})
