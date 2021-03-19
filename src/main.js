import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

Vue.config.productionTip = false

export default new Vuetify({
  theme: {
    themes: {
      light: {
        pri: '#4069e6',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
 });

new Vue({
  router,
  store,
  vuetify: new Vuetify,
  render: h => h(App)
}).$mount('#app')
