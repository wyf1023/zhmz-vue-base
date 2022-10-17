/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 17:03:17
 */
import { Router } from "vue-router";
import { useUserStore } from "@/stores/common/user";

/**
 * 权限路由守卫
 * @param router
 */
export function permissionGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.path == "/login") {
      next();
    } else if (userStore.userState.authorized) {
      next();
    } else {
      next("/login");
    }
  });
}
