import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import Main from './components/Main.vue'
import LikedDogs from './components/LikedDogs.vue'
import UnLikedDogs from './components/UnLikedDogs.vue'
import DogMoreInfo from './components/DogMoreInfo.vue'

import store from './stores/main'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {path: '/', component: Main},
    {path: '/dog/:uuid', component: DogMoreInfo, name: 'dog-info'},
    {path: '/liked', component: LikedDogs},
    {path: '/unliked', component: UnLikedDogs},
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
