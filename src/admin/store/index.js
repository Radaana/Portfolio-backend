import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.use(Vuex);

import skills from "./modules/skills";

const store = new Vuex.Store({
  modules: { skills }
});

export default store;
