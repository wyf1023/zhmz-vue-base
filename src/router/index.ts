import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/page1",
    component: () => import("@/views/test/page1.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/login.vue"),
  },

  {
    path: "/page2",
    component: () => import("@/views/test/page2.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
