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
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "p-details" */ '../views/ProductDetail.vue'),
    beforeEnter(to, from, next) {
      if (Object.keys(to.query).includes('id')) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "account" */ '../views/Account.vue'),
    beforeEnter(to, from, next) {
      if (localStorage.getItem('user')) {
        const token = JSON.parse(localStorage.getItem('user')).token;
        if (token !== null || token !== '') {
          next('/profile');
        }
      } else {
        next();
      }
    }
  },
  {
    path: '/lab-test',
    name: 'Lab Tests',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "lab-test" */ '../views/LabTests.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "address" */ '../views/Address.vue'),
    meta: {
      requiresAuth: true
    }
  }, 
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => { 
  if (isAuthenticated(to)) {
    const token = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : null;
    if (token === null) {
      next("/account");
    }
  }
  next();
});

function isAuthenticated(to) {
  return to.matched.some((record) => record.meta.requiresAuth);
}

export default router
