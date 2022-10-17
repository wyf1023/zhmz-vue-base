/*
 * @Author: wuyefan
 * @Date: 2022-10-17 11:26:56
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 17:38:43
 */
import { defineStore } from "pinia";

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

export const useTabStore = defineStore("tabs", {
  state: () => ({
    tabs: [homePageTab],
  }),
  actions: {
    addTabs(name, title, path, selected) {
      this.tabs.push({
        name,
        title,
        path,
        canClose: true,
        selected: selected,
      });
    },

    removeTabs() {},
  },
});
