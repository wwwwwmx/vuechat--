import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import pinia from "./store/store";
import { createPinia } from "pinia";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(createPinia());
app.mount("#app");
