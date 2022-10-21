/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 14:30:29
 */
import { Router } from "vue-router";
import { useUserStore } from "@/plugins/stores/store/user";
import { useDynamicRoutersStore } from "@/plugins/stores/store/routers";
/**
 * 权限路由守卫
 * @param router
 */
export function permissionGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const dynamicRoutersStore = useDynamicRoutersStore();

    /**
     * 动态路由刷新页面，需重新加载
     */
    if (userStore.userState.authorized && userStore.userState.token) {
      if (!dynamicRoutersStore.isLoad) {
        dynamicRoutersStore.BuildDynamicRouters(router).then(() => {
          next({ ...to });
        });
      } else {
        next();
      }
    } else if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  });
}
