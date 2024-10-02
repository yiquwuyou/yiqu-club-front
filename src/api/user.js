import request from "@/utils/request.js";

// 登录接口
export const userLoginService = (validCode) => request.get(`/auth/user/doLogin?validCode=${encodeURIComponent(validCode)}`);

// 获取用户信息接口
export const userGetInfoService = () => request.get('/permission/getPermission')