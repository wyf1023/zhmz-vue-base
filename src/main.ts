import { createApp } from "vue";
import { initIcons } from "./global/icons"; //引入所有图标
import { initRouteGuards } from "./router/guards"; //引入所有图标
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus"; //国际化
import zhCn from "element-plus/es/locale/lang/zh-cn"; //国际化
import router from "./router";
import "element-plus/theme-chalk/dark/css-vars.css"; //暗黑样式
import "element-plus/theme-chalk/display.css";
import "./style/index.less";

const app = createApp(App);
//注册图标
initIcons(app);
//路由守卫
initRouteGuards(router);
//国际化组件
app
  .use(ElementPlus, { locale: zhCn })
  .use(router)
  .use(createPinia())
  .mount("#app");
