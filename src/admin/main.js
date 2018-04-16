import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
Vue.use(VueAxios, axios);

// import store from './store'



new Vue({
  el: '#admin-app',
  // store,
  router,
  render: h => h(App)
})
