/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 17:32:38
 */
import { Router } from "vue-router";
import { useTabStore } from "@/plugins/stores/store/tabs";

/**
 *  tab路由守卫
 */
export function tabGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const tabStore = useTabStore();
    let tabs = tabStore.tabs;

    if (
      !tabs.some((item) => {
        return item.path == to.path;
      }) &&
      !to.path.includes("login")
    ) {
      tabStore.addTab(to.path, to.meta.title, to.path, true, to.meta.close);
    }
    next();
  });
}
