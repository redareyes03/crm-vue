import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Clientes/ListarView.vue'
import not_found_page from '../views/Layouts/404_View.vue'


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
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: not_found_page
    }
  ]
})

export default router
