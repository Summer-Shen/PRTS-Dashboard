import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "",
    redirect: "/stages",
  },
  {
    path: "/stages",
    component: () => import("../views/Stages.vue"),
  },
  {
    path: "/links",
    component: () => import("../views/Links.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
