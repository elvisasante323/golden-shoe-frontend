import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Orders from "../pages/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "customer/orders",
    name: "orders",
    component: Orders,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }, 
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
