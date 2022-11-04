import axios from "axios";
//路径  响应超时
const http = axios.create({
  baseURL: "/api",
  timeout: 3000,
});
//配置请求拦截器
// http.interceptors.request.use({

// })
// //配置响应拦截器
// http.interceptors.response.use({

// })
export default http;
