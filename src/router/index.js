import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainView.vue'),
      meta: { title: 'Time Travel!' },
      children: [
        {
          path: '',
          component: () => import('@/modules/Home.vue'),
          meta: {
            title: 'The Game',
          },
        },
        {
          path: 'play/:current',
          component: () => import('@/modules/Playing.vue'),
          props: true,
          meta: {
            title: 'Play',
          },
        },
        {
          path: 'play/results',
          component: () => import('@/modules/Final.vue'),
          props: true,
          meta: {
            title: 'Resultados',
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*', // capturar todos los links que no están definidos arriba
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '¡Página no encontrada!',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const tituloPadre = to.matched[0]?.meta?.title || ''
  const tituloHijo = to.meta?.title || 'Time Travel!'

  if (tituloPadre && tituloHijo && tituloPadre != tituloHijo) {
    document.title = `${tituloPadre} - ${tituloHijo}`
  } else {
    document.title = tituloHijo
  }

  next()
})

export default router
