import { createApp } from "vue"; //vue
import { createPinia } from "pinia"; //pinia
import App from "./views/Index/Index.vue"; //初次加载页面
// import App from "./Index.vue";
import router from "./router/index"; //路由
import ElementPlus from "element-plus"; //Element-Plus
import "element-plus/theme-chalk/index.css"; //Element-PLus
import * as ElIconModules from "@element-plus/icons"; //Element-Plus图标
import * as echarts from "echarts"; //Echarts图表
import axios from "./axios/request"; //引入封装axios请求
import "../src/style/Tools.css"; //全局样式

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.$axios = axios; //引入全局属性
//全局引入icon图标
for (let iconName in ElIconModules) {
  app.component(iconName, ElIconModules[iconName]);
}
app.use(ElementPlus).use(pinia).use(router).mount("#app");
