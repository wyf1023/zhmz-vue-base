/*
 * @Author: wuyefan 
 * @Date: 2022-10-14 14:23:47 
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-14 14:39:55
 */
import { Router } from "vue-router";

export function initRouteGuards(router:Router){
   router.beforeEach((to, from, next) => {
      console.log("全局路由守卫：",to);
      next();
   })
}

