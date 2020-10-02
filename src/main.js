import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store/index'
import router from './router/index'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(axios);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.filter('to-firstLetter-capital', function(value){
  return value[0].toUpperCase()+value.slice(1);
});

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.get['Accepts'] = 'application/json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
// .$mount('#app')
