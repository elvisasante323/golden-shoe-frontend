import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Orders from "../pages/Orders.vue";
import Checkout from "../pages/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/customer/orders",
    name: "orders",
    component: Orders,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  }, 
  {
    path: "/home",
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
