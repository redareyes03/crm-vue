import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Clientes/ListarView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    }, 
    {
      path: '/agregar-cliente',
      name: 'agregar cliente',
      component: () => import('../views/Clientes/FormularioView.vue'),
      props: {
        pagina: "Agregar"
      }
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import('../views/Clientes/FormularioView.vue'),
      props: {
        pagina: "Editar"
      }
    }
  ]
})

export default router
