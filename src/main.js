import Vue from 'vue'
import App from './App.vue';

import router from './routes.js';
import store from './store';

import './assets/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
