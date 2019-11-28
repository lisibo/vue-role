import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission.js"

import "@/directive/permission/index"

import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUi)

Vue.config.productionTip = false;

var roles = name
window.localStorage.setItem('role',roles)
store.dispatch('getRoutes',{roles}).then(()=>{
  router.addRoutes(store.getters.permission_routes) 
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
