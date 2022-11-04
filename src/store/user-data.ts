import { createStore } from "vuex";
export default createStore({
  state: {
    userInfo: {},
    account: "",
    username: "",
    password: "",
    imgUrl: "",
    signatrue: "",
    friendList: [],
    sendMessage: [],
  },
});
