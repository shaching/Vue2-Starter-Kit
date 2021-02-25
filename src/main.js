import Vue from 'vue';
import vuetify from '@/vuetify';
import App from '@/App';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#root',
  router,
  store,
  components: { App },
  template: '<App/>',
});
