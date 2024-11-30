import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import CityView from '../views/CityView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'city',
      component: CityView,
    },
    {
      // path: '/weather/:city',
      path: '/weather',
      query: ['lat', 'lon', 'name', 'country', 'c_code', 'id'],
      name: 'weather',
      component: WeatherView,
    },
    // will match everything and put it under `route.params.pathMatch`
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
