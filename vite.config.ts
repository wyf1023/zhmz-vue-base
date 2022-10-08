import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite' //vite插件 自动import elementui组件
import Components from 'unplugin-vue-components/vite' //vite插件 自动注册 elementui组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // elementui组件注册函数
import vueJsx from '@vitejs/plugin-vue-jsx' //jsx插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vueJsx()
  ],
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled: true,
        // additionalData:` import "${path.resolve(__dirname,'./src/style/index.less')}";`,
      }
    }
  }
})
