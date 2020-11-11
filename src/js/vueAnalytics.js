import Vue from 'vue';
import router from '@/router/index';
import VueGtag from 'vue-gtag';

Vue.use(
  VueGtag,
  {
    config: {
      id: 'G-J8K2BYZ3H9',
    },
  },
  router,
);
