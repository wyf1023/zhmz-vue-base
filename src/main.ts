import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入所有图标
import ElementPlus from 'element-plus' //国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn' //国际化
import 'element-plus/theme-chalk/dark/css-vars.css' //暗黑样式
import 'element-plus/theme-chalk/display.css'
import './style/index.less'

const app= createApp(App)

//注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

//国际化组件
app.use(ElementPlus,{locale:zhCn,}).use(router).mount('#app')

