import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowFilms from '../views/ShowFilms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShowFilms
  },
  {
    path: '/ShowStarships',
    name: 'ShowStarships',
    component: () => import('../views/ShowStarships.vue')
  },
  {
    path: '/ShowPeople',
    name: 'ShowPeople',
    component: () => import('../views/ShowPeople.vue')
  },
  {
    path: '/ShowPlanets',
    name: 'ShowPlanets',
    component: () => import('../views/ShowPlanets.vue')
  },
  {
    path: '/ShowSpecies',
    name: 'ShowSpecies',
    component: () => import('../views/ShowSpecies.vue')
  },
  {
    path: '/ShowVehicles',
    name: 'ShowVehicles',
    component: () => import('../views/ShowVehicles.vue')
  },
  {
    path: '/infoFilms',
    name: 'infoFilms',
    component: () => import('../views/infoFilms.vue')
  },
  {
    path: '/infoCharacters',
    name: 'infoCharacters',
    component: () => import('../views/infoCharacters.vue')
  },
  {
    path: '/infoPlanets',
    name: 'infoPlanets',
    component: () => import('../views/infoPlanets.vue')
  },
  {
    path: '/infoSpecies',
    name: 'infoSpecies',
    component: () => import('../views/infoSpecies.vue')
  },
  {
    path: '/InfoStarShip',
    name: 'InfoStarShip',
    component: () => import('../views/InfoStarShip.vue')
  },
  {
    path: '/infoVehicles',
    name: 'infoVehicles',
    component: () => import('../views/infoVehicles.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue')
  }

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
