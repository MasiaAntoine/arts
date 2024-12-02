import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:nameCat?",
      name: "home",
      component: () => import("../views/HomeView/HomeView.vue"),
    },
  ],
});

export default router;
