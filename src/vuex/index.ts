import Vue from 'vue';
import Vuex from 'vuex';
import radioGroup from './module/radioGroup';
import checkboxGroup from './module/checkboxGroup';
import select from './module/select';
import cascader from './module/cascader';
import carousel from './module/carousel';



Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    radioGroup,
    checkboxGroup,
    select,
    cascader,
    carousel,
  },
});

export default store;
