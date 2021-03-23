import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-medicine',
    name: 'Search Medicine',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "s-med" */ '../views/SearchView.vue')
  },
  {
    path: '/product-details',
    name: 'Product Details',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "p-details" */ '../views/ProductDetail.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/lab-test',
    name: 'Lab Tests',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "lab-test" */ '../views/LabTests.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "address" */ '../views/Address.vue')
  }, 
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "cart" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
