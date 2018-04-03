import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import About from './components/about.vue'
import Page from './components/page.vue'

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path : '/pages/:pageId',
    component: Page,
    props: true
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})