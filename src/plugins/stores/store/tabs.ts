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
  close: boolean;
  /**
   * 是否选中
   */
  selected: boolean;
}

export const useTabStore = defineStore(StoreNameEnum.Tabs, {
  state: () => ({
    tabs: [],
  }),
  persist: {
    // 自定义数据持久化方式
    storage: window.sessionStorage, // 指定换成地址
    paths: ["tabs"], // 指定需要持久化的state的路径名称
  },
  actions: {
    addTab(name, title, path, selected, close): void {
      this.tabs = this.tabs.map((tab) => {
        return {
          name: tab.name,
          title: tab.title,
          path: tab.path,
          selected: false,
          close: tab.close,
        };
      });

      this.tabs.push({
        name,
        title,
        path,
        close,
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
