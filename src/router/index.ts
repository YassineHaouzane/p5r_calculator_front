import { createRouter, createWebHistory } from 'vue-router'
import PersonasView from '../views/PersonasView.vue'
import PersonaView from '../views/PersonaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/persona/:name',
      component: PersonaView,
      props: true,
    },
    {
      path: '/',
      name: 'personas',
      component: PersonasView
    }

  ]
})

export default router
