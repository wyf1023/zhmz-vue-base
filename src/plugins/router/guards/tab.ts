/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 17:32:38
 */
import { Router } from "vue-router";
import { useTabStore } from "@/plugins/stores/store/tabs";
import { RouteNameEnum } from "@/configs/enums";

/**
 *  tab路由守卫
 */
export function tabGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const tabStore = useTabStore();
    let tabs = tabStore.tabs;

    /**
     * 选项卡路由守卫，存在则选中，不存在则添加
     */
    if (
      !tabs.some((item) => {
        return item.name == to.name;
      }) &&
      !to.name.toString().includes("login")
    ) {
      tabStore.addTab(to.name, to.meta.title, to.path, to.meta.close);
    } else {
      if (
        tabs.some((item) => {
          return item.name == to.name;
        })
      ) {
        tabStore.selected(to.name.toString());
      }
    }
    next();
  });
}
