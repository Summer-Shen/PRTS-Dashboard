import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/links", // todo
  },
  {
    path: "/announcements",
    component: () => import("../views/Announcements.vue"),
  },
  {
    path: "/stages",
    component: () => import("../views/Stages.vue"),
  },
  // {
  //   path: "/archive",
  //   component: () => import("../views/Archive.vue"),
  // },
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
