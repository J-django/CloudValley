import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/Index/Main/MainPanel.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Index",
      name: "Index",
      component: () => import("../views/Index/Main/Main.vue"),
    },
    {
      path: "/MainPanel",
      name: "MainPanel",
      component: () => import("../views/Index/Main/MainPanel.vue"),
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/Login/Login.vue"),
    },
    {
      path: "/403",
      name: "403",
      component: () => import("../views/ErrorPage/403.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/ErrorPage/404.vue"),
    },
  ],
});

export default router;
