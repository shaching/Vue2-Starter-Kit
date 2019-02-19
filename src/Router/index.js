import Vue from 'vue';
import VueRouter from 'vue-router';
import Content from '@/Components/Content/Views/Centent';
import Hello from '@/Components/Hello/Views/Hello';
import Home from '@/Components/Home/Views/Home';
import SignIn from '@/Components/SignIn/Views/SignIn';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Content,
        },
        {
          path: 'signin',
          component: SignIn,
        },
      ],
    },
  ],
});
