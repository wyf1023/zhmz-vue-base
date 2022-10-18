/*
 * @Author: wuyefan
 * @Date: 2022-10-15 20:34:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 16:57:06
 */

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/main/index.vue"),
    children: [
      { path: "", component: () => import("@/views/home.vue") },
      {
        path: "message/list",
        component: () => import("@/views/message/list.vue"),
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
