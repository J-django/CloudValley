import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Tov from "./presets/compoment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Tov()],
  server: {
    //服务配置
    open: true, //启动项目时自动打开浏览器
    host: "0.0.0.0", //允许本机访问
    port: 4000, //设置端口号
    proxy: {
      //配置地址重写
      "/api": {
        target: "http://localhost:32013", //实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), //地址替换
      },
    },
  },
  base: "/dist/",
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }


          
        },
      },
    },
  },
});
