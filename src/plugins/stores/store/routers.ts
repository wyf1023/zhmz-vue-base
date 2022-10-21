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

export const useDynamicRoutersStore = defineStore(StoreNameEnum.Routers, {
  state: () => ({
    isLoad: false,
  }),
  actions: {
    async BuildDynamicRouters(router: Router): Promise<RouteRecordRaw[]> {
      let res = await API.resource.getResource();
      //资源对象
      let resources: Resource[] = res.data;
      let routers: RouteRecordRaw[] = await this.getRouters(resources, router);
      router.addRoute("layout", {
        path: "/user",
        name: "user",
        component: () => import("@/views/userMgt/user.vue"),
      });

      this.isLoad = true;
      return routers;
    },
    async getRouters(
      resources: Resource[],
      router: Router
    ): Promise<RouteRecordRaw[]> {
      let routers: RouteRecordRaw[] = [];
      if (resources.length > 0) {
        for (let i = 0; i < resources.length; i++) {
          let route: RouteRecordRaw = {
            path: "/" + resources[i].href,
            // name: resources[i].title,
            component: () => import("@/views/userMgt/user.vue"),
            children: await this.getRouters(resources[i].children, router),
          };
          routers.push(route);
        }
      }
      return routers;
    },
  },
});
