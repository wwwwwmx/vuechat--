import { createRouter, createWebHistory } from "vue-router";
import Login from "@/view/charUser/Login.vue";
import userHome from "@/view/charUser/userHome.vue";
import applyMessage from "@/view/charUser/applyMessage.vue";
import friendList from "@/view/charUser/friendList.vue";
// import otherFunc from "@/components/charUser/otherFunc.vue";
import userSetting from "@/view/charUser/userSetting.vue";
import friendCircle from "@/view/charUser/friendCircle.vue";
interface Irouter {
  path: string;
  component: any;
  name: string;
  children?: any;
  meta?: any;
}
//检查格式
const routes: Irouter[] = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home-view",
    name: "userHome",
    component: userHome,
  },
  {
    path: "/list-view",
    name: "friendList",
    component: friendList,
  },
  {
    path: "/apply-view",
    name: "applyMessage",
    component: applyMessage,
  },
  {
    path: "/friend-circle",
    name: "friendCircle",
    component: friendCircle,
  },
  // {
  //   path: "/func-view",
  //   name: "otherFunc",
  //   component: otherFunc,
  // },
  {
    path: "/setting-view",
    name: "userSetting",
    component: userSetting,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
