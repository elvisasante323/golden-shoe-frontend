import App from "./App.vue";
import router from "./router";
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AxiosPlugin from'vue-axios-cors';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(axios);

Vue.use(AxiosPlugin);

export const bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
