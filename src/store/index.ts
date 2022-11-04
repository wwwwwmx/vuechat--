// import userData from "@/store/user-data";
// import navLink from "./nav-link";
// 想要使用必须先引入 defineStore；
import { defineStore } from "pinia";
export const indexStore = defineStore("storeIndex", {
  state: () => {
    // 存放的就是模块的变量
    return {
      userInfo: {
        account: "qwq",
        username: "wqw",
        password: "oooo",
        imgUrl: "",
        signatrue: "",
        friendList: [],
        sendMessage: [],
        _id: "",
      },
    };
  },
  getters: {
    // 相当于vue里面的计算属性，可以缓存数据
  },
  actions: {
    changeState(obj: any) {
      this.userInfo = obj;
    },
  },
});
// export { indexStore };
