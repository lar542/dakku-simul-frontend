import Vue from 'vue';
import Vuex from 'vuex';
import cavas from '@/store/modules/cavas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cavas,
  },
});
