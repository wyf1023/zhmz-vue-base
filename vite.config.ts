import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; // elementui组件注册函数
import AutoImport from "unplugin-auto-import/vite"; //vite插件 自动import elementui组件
import Components from "unplugin-vue-components/vite"; //vite插件 自动注册 elementui组件
import vueJsx from "@vitejs/plugin-vue-jsx"; //jsx插件


// https://vitejs.dev/config/
export default defineConfig(({command,mode})=> 
{

  const env=loadEnv(mode, process.cwd());
  return {
      plugins: [
        vue(),
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
        vueJsx(),
      ],
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
      envPrefix:"APP_",//APP_  为自定义开头名
  }
});



