import { App } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入所有图标



export function initIcons(app: App<Element>){
//注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
