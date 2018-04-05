import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import store from './store'
import router from './router'


new Vue({
  el: '#admin-app',
  store,
  router,
  render: h => h(App)
})
