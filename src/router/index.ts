/*
 * @Author: wuyefan
 * @Date: 2022-10-14 21:22:29
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-15 20:43:05
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LAYOUTS_ROUTES from "./configs";

const routes: RouteRecordRaw[] = [...LAYOUTS_ROUTES];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
