/*
 * @Author: wuyefan
 * @Date: 2022-10-15 20:34:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-15 20:45:50
 */

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/main/index.vue"),
    children: [
      { path: "", component: () => import("@/views/home.vue") },

      {
        path: "page1",
        component: () => import("@/views/test/page1.vue"),
      },
      {
        path: "page2",
        component: () => import("@/views/test/page2.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
];

export default routes;
