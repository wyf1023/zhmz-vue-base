/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 14:30:29
 */
import { Router, RouteLocationRaw } from "vue-router";
import { useUserStore } from "@/plugins/stores/common/user";

/**
 * 权限路由守卫
 * @param router
 */
export function permissionGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (userStore.userState.authorized && userStore.userState.token) {
      next();
    } else if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  });
}
