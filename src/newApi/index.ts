import request from "@/newApi/request";
//一般get用params，post用data并且需要{}来接受
export const reqRegister = (params: any) => {
  console.log(params);
  return request({
    url: "/aboutuser/register",
    method: "POST",
    data: params,
  });
};
export const reqLogin = (params: any) => {
  console.log(params, "22222");
  return request({
    url: "/aboutuser/login",
    method: "POST",
    data: params,
  });
};
export const reqChangeself = (params: any) => {
  return request({
    url: "/aboutuser/changeSelf",
    method: "post",
    data: { params },
  });
};
export const reqGetFriend = (params: any) => {
  console.log(params);
  return request({
    url: "/aboutfriendlist/get-list",
    method: "POST",
    data: params,
  });
};
export const reqSearchFriend = (params: any) => {
  return request({ url: "/search-friend", method: "post", data: { params } });
};
export const reqAddFriend = (params: any) => {
  return request({ url: "/add-friend", method: "post", data: { params } });
};
export const reqDeleteFriend = (params: any) => {
  console.log(params);
  return request({ url: "/delete-friend", method: "post", data: params });
};

export const reqChangeList = (params: any) => {
  console.log(params, "vhangelistparams");
  return request({
    url: "/aboutfriendlist/change-list",
    method: "post",
    data: params,
  });
};
export const reqAddList = (params: any) => {
  return request({ url: "/add-list", method: "post", data: { params } });
};
export const reqDeleteList = (params: any) => {
  console.log(params, "params");
  return request({
    url: "/aboutfriendlist/delete-list",
    method: "post",
    data: params,
  });
};
export const reqGetList = (params: any) => {
  console.log(params);
  return request({
    url: "/aboutfriendlist/get-list",
    method: "get",
    data: { params },
  });
};
