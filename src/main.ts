/*
 * @Author: wuyefan
 * @Date: 2022-10-18 16:21:08
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-18 16:52:08
 */

import { createApp } from "vue";
import { initIcons } from "@/plugins/element-ui";
import { initRouteGuards } from "@/plugins/router/guards";
import store from "@/plugins/stores";
import App from "@/App.vue";
import ElementPlus from "element-plus"; //国际化
import zhCn from "element-plus/es/locale/lang/zh-cn"; //国际化
import router from "@/plugins/router";
import "element-plus/theme-chalk/dark/css-vars.css"; //暗黑样式
import "element-plus/theme-chalk/display.css";
import "@/style/index.less";

const app = createApp(App);
//注册ElementUI图标
initIcons(app);
//路由守卫
initRouteGuards(router);
//国际化组件
app.use(router).use(ElementPlus, { locale: zhCn }).use(store).mount("#app");
