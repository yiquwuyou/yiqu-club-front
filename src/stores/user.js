import { defineStore } from 'pinia';
import { ref } from 'vue';
import { userGetInfoService } from '@/api/user.js';

// 用户模板 token setToken removeToken
export const useUserStore = defineStore(
    'yiqu-user',
    () => {
        const satoken = ref('');

        const user = ref({});

        const setSatoken = (newSatoken) => {
            satoken.value = newSatoken;
        };

        const removeSatoken = () => {
            satoken.value = '';
        };


        const getUser = async () => {
            const res = await userGetInfoService()
            // console.log("getUser",res)
            user.value = res.data.data
        }

        const setUser = (obj) => {
            user.value = obj;
        };

        return {
            satoken,
            setSatoken,
            removeSatoken,
            user,
            getUser,
            setUser
        };
    },
    {
        persist: true // 使状态持久化
    }
);