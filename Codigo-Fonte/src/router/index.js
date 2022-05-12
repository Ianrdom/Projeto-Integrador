import { createRouter, createWebHistory } from "vue-router";
import CardapioHome from "../views/CardapioHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CardapioHome,
    },
    {
      path: "/sobre",
      name: "sobre",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SobreNos.vue"),
    },
  ],
});

export default router;
