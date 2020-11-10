import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/store';
import '@/js/fontAwesomeIcon';
import '@/js/bootstrap';
// import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
