/*
 * @Author: wuyefan
 * @Date: 2022-10-17 11:26:56
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:08:06
 */
import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";

/**
 * 选项卡信息
 */
interface TabInfo {
  /**
   * 选项卡name
   */
  name: string;
  /**
   * 选项卡title
   */
  title: string;
  /**
   * 选项卡路由路径
   */
  path: string;
  /**
   * 选项卡是否可以关闭
   */
  canClose: boolean;
  /**
   * 是否选中
   */
  selected: boolean;
}

let homePageTab: TabInfo = {
  name: "homePage",
  title: "主页",
  path: "/",
  canClose: false,
  selected: true,
};

export const useTabStore = defineStore(StoreNameEnum.Tabs, {
  state: () => ({
    tabs: [],
  }),
  actions: {
    addTabs(name, title, path, selected): void {
      this.tabs = this.tabs.map((tab) => {
        return {
          name: tab.name,
          title: tab.title,
          path: tab.path,
          selected: false,
        };
      });

      this.tabs.push({
        name,
        title,
        path,
        canClose: true,
        selected: selected,
      });
    },
    removeTabs(name: string): void {
      const index = this.tabs.findIndex((tab) => tab.name === name);
      this.tabs[index - 1].selected = true;
      this.tabs.splice(index, 1);
    },
    getTabByName(name: string): TabInfo {
      return this.tabs.find((tab) => {
        return tab.name === name;
      });
    },
  },
});
