/*
 * 常量路由
 * @Author: wuyefan
 * @Date: 2022-10-15 20:34:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-21 16:25:22
 */
import { RouteRecordRaw } from "vue-router";

export const HOMEPAGE_ROUTE: RouteRecordRaw = {
  path: "",
  name: "home",
  component: () => import("@/views/home.vue"),
};
/**
 * 登录路由
 */
export const LOGIN_ROUTE: RouteRecordRaw = {
  name: "login",
  path: "/login",
  component: () => import("@/views/login.vue"),
};

/**
 * 模板路由
 */
export const LAYOUTS_ROUTE: RouteRecordRaw = {
  name: "layout",
  path: "/",
  component: () => import("@/layouts/main/index.vue"),
  children: [HOMEPAGE_ROUTE],
};
