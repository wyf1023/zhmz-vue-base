/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 17:32:38
 */
import { Router } from "vue-router";
import { useTabStore } from "@/stores/common/tabs";

/**
 *  tags路由守卫
 * @param router
 */
export function tagsGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const tabStore = useTabStore();
    let tabs = tabStore.tabs;

    if (
      !tabs.some((item) => {
        return item.path == to.path;
      })
    ) {
      tabStore.addTabs(to.path, "测试", to.path, true);
    }

    next();
  });
}
