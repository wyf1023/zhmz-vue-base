/*
 * @Author: wuyefan
 * @Date: 2022-10-20 21:05:54
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:50:42
 */
import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { MenuInfo } from "@/types";
import API from "@/api";

export const usePermissionStore = defineStore(StoreNameEnum.Permission, {
  state: () => ({
    menus: [] as MenuInfo[],
  }),
  actions: {
    async getMenus(): Promise<MenuInfo[]> {
      let res = await API.permission.getMenus();
      let menus = res.data.map((menu) => {
        return {
          title: menu.title,
          href: menu.href,
          icon: menu.icon,
          isParent: menu.children.length > 0,
          id: menu.id,
          pid: menu.pid,
          component: menu.component,
          children: menu.children,
        };
      });
      return menus;
    },
  },
});
