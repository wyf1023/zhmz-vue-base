/*
 * @Author: wuyefan
 * @Date: 2022-10-14 14:23:47
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-17 17:02:46
 */
import { Router } from "vue-router";
import { permissionGuards } from "@/plugins/router/guards/permission";
import { tabGuards } from "@/plugins/router/guards/tab";

export function initRouteGuards(router: Router) {
  permissionGuards(router);
  tabGuards(router);
}
