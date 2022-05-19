import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/CardapioPage.vue"),
    },
    {
      path: "/sobre",
      name: "sobre",
      component: () => import("../views/SobrePage.vue"),
    },
    {
      path: "/contato",
      name: "contato",
      component: () => import("../views/ContatoPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/usuario",
      name: "usuario",
      component: () => import("../views/UsuarioPage.vue"),
    },
  ],
});

export default router;
