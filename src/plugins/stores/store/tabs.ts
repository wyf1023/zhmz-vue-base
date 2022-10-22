/*
 * @Author: wuyefan
 * @Date: 2022-10-17 11:26:56
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:08:06
 */
import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { RouteNameEnum } from "@/configs/enums";

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
    /**
     * 添加tab
     * @param name
     * @param title
     * @param path
     * @param close
     */
    addTab(name, title, path, close): void {
      this.clearSelect();
      this.tabs.push({
        name,
        title,
        path,
        close,
        selected: true,
      });
    },
    selected(name: string): void {
      this.clearSelect();

      let toTab: TabInfo = this.tabs.find((item) => {
        return item.name == name;
      });

      toTab.selected = true;
    },
    /**
     * 根据名称删除tab
     * @param name
     */
    removeTabByName(name: string): void {
      const index = this.tabs.findIndex((tab) => tab.name === name);
      this.tabs[index - 1].selected = true;
      this.tabs.splice(index, 1);
    },
    /**
     * 根据路由名称获取tab
     * @param name 根据路由名称获取tab
     * @returns
     */
    getTabByName(name: string): TabInfo {
      return this.tabs.find((tab) => {
        return tab.name === name;
      });
    },
    /**
     * 清空tab选项卡
     */
    removeTabs(): void {
      this.tabs = [];
    },
    /**
     * 清空tab
     * @param routeName 根据路由名称保留相关tab
     * @param command all:关闭所有（保留首页），other:关闭其他（保留当前页和首页）
     */
    removeCustomTabs(routeName: string = "", command: string): void {
      this.tabs = this.tabs.filter((tab) => {
        if (routeName != "" && command == "other") {
          return tab.name === RouteNameEnum.HOMEPAGE || tab.name === routeName;
        } else {
          return tab.name === RouteNameEnum.HOMEPAGE;
        }
      });
    },
    clearSelect(): void {
      this.tabs = this.tabs.map((tab) => {
        return {
          name: tab.name,
          title: tab.title,
          path: tab.path,
          selected: false,
          close: tab.close,
        };
      });
    },
  },
});
