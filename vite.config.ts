import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; // elementui组件注册函数
import AutoImport from "unplugin-auto-import/vite"; //vite插件 自动import elementui组件
import Components from "unplugin-vue-components/vite"; //vite插件 自动注册 elementui组件
import vueJsx from "@vitejs/plugin-vue-jsx"; //jsx插件
import postcssPresetEnv from "postcss-preset-env"; //preset   //预设环境
import { viteMockServe } from "vite-plugin-mock";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "APP_");

  return {
    server: {
      port: 3333,
      open: true,
      host: "localhost",
      proxy: {
        "/api": {
          target: "http://10.1.150.152:49982",
          changeOrigin: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        localEnabled: command === "serve" && env.APP_MOCK === "true",
      }),
      checker({
        typescript: false,
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      devSourcemap: true,
      postcss: {
        plugins: [
          postcssPresetEnv(),
          // {
          //   importFrom: path.resolve(
          //     __dirname,
          //     "./node_modules/element-plus/theme-chalk/base.css"
          //   ),
          // }
        ],
      },
    },
    envPrefix: "APP_", //配置vite注入客户端环境变量校验的env前缀
  };
});
