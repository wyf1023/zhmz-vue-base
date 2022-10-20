/*
 * @Author: wuyefan
 * @Date: 2022-10-20 10:54:09
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:00:45
 */
/**
 *工具栏
 */

import { useUserStore } from "@/plugins/stores/store/user";
/**
 * 工具栏内容
 */
interface ToolBarItem {
  /**
   * id
   */
  id: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 图片地址
   */
  icon: string;
  /**
   * 跳转url
   */
  url: string;
  /**
   * 回调函数
   */
  callback?: (id: string) => void;
}

const items: ToolBarItem[] = [
  {
    id: "userinfo",
    title: "个人信息",
    icon: "",
    url: "/test",
  },
  {
    id: "exit",
    title: "退出系统",
    icon: "",
    url: "/",
  },
];

export default items;
