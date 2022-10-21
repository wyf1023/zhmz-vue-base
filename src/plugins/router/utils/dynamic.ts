/*
 * 动态路由加载
 * @Author: wuyefan
 * @Date: 2022-10-21 14:53:16
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-21 16:14:23
 */

import API from "@/api";
import { Resource } from "@/types";
import { RouteRecordRaw } from "vue-router";
/**
 * 获取路由
 * @returns RouteRecordRaw[]
 */
async function getDynamicRouters(): Promise<RouteRecordRaw[]> {
  let res = await API.resource.getResource();
  //资源对象
  let resources: Resource[] = res.data;
  let routes = await getRouters(resources);

  return;
}

/**
 * 递归加载动态路由
 * @param resources
 * @returns
 */
async function getRouters(resources: Resource[]): Promise<RouteRecordRaw[]> {
  let routes: RouteRecordRaw[] = [];
  if (resources.length > 0) {
    for (let i = 0; i < resources.length; i++) {
      let route: RouteRecordRaw = {
        path: resources[i].href,
        name: resources[i].title,
        component: () => import(`@/${resources[i].href}`),
        children: await getRouters(resources[i].children),
      };
      routes.push(route);
    }
  }

  return routes;
}

export default getDynamicRouters;
