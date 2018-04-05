import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import About from './components/about.vue';
import Page from './components/page.vue';
import Blog from './components/blog.vue';
import Works from './components/works.vue';

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path: '/admin',
    component: About
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/works',
    component: Works
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