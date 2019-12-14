import Vue from 'vue';
import App from './App.vue';
import store from './vuex';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

Vue.use(Vuetify);
