import Vue from 'vue';
import Vuex from 'vuex';
import SignIn from '@/Components/SignIn/Store';
import Portal from '@/Components/Portal/Store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SignIn,
    Portal,
  },
});
