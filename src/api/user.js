import request from "@/utils/request.js";

// 登录接口
export const userLoginService = (authCode) => {
    const url = `/auth/user/doLogin?authCode=${encodeURIComponent(authCode)}`;
    return request.get(url);
};
// 获取用户信息接口
export const userGetInfoService = () => request.get('/permission/getPermission')