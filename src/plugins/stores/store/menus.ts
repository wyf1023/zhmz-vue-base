/*
 * @Author: wuyefan
 * @Date: 2022-10-20 21:05:54
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-21 15:35:49
 */
import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { Resource } from "@/types";
import API from "@/api";

export const useMenusStore = defineStore(StoreNameEnum.Menus, {
  state: () => ({
    menus: [] as Resource[],
  }),
  actions: {
    async getMenus(): Promise<Resource[]> {
      let res = await API.resource.getResource();
      let menus = res.data.map((resource) => {
        return {
          title: resource.title,
          href: resource.href,
          icon: resource.icon,
          isParent: resource.children.length > 0,
          id: resource.id,
          pid: resource.pid,
          component: resource.component,
          children: resource.children,
        };
      });
      return menus;
    },
  },
});
