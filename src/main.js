import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue';

//Pages Import
import AboutPage from './pages/About.vue';
import ALX009Page from './pages/ALX009.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/alx-009',
      name: 'ALX009',
      component: ALX009Page,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
