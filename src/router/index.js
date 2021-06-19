import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MainApp from "../views/MainApp.vue";
import s404 from "../views/s404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/app",
    name: "MainApp",
    component: MainApp
  },
  {
    path: "/*",
    name: "s404",
    component: s404
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
