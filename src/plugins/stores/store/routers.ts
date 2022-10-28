/*
 * @Author: wuyefan
 * @Date: 2022-10-20 21:05:54
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-21 16:32:24
 */
import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { Resource } from "@/types";
import API from "@/api";
import { RouteRecordRaw, Router } from "vue-router";

const modules = import.meta.glob(["@/views/*.vue", "@/views/**/*.vue"]);

export const useDynamicRoutersStore = defineStore(StoreNameEnum.Routers, {
  state: () => ({
    buildDynamicRouters: false,
  }),
  actions: {
    /**
     * 动态加载路由
     * @param router
     * @returns
     */
    async BuildDynamicRouters(router: Router): Promise<void> {
      console.log("modules:", modules);
      let res = await API.resource.getResource();
      let resources: Resource[] = res.data;
      await this.mapRouters(resources, router);
      this.buildDynamicRouters = true;
    },
    /**
     * 映射路由
     * @param resources 资源列表
     * @param router 路由器对象
     * @returns 将资源列表转化后的路由集合
     */
    async mapRouters(
      resources: Resource[],
      router: Router
    ): Promise<RouteRecordRaw[]> {
      let routers: RouteRecordRaw[] = [];
      if (resources.length > 0) {
        for (let i = 0; i < resources.length; i++) {
          let route: RouteRecordRaw = {
            path: resources[i].href,
            name: resources[i].id,
            component:
              modules[`/src/views/${resources[i].component}.vue`] ||
              modules["/src/views/exception.vue"],
            children: await this.mapRouters(resources[i].children, router),
            meta: {
              title: resources[i].title,
              close: true,
            },
          };

          if (resources[i].children.length === 0) {
            routers.push(route);
            router.addRoute("layout", route);
          }
        }
      }
      return routers;
    },
  },
});
