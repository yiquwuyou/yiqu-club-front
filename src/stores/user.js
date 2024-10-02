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
            try {
                const res = await userGetInfoService(); // 请求获取数据
                if (res.success && res.data) {
                    setUser(res.data);
                } else {
                    console.error('Failed to fetch user information.');
                }
            } catch (error) {
                console.error('Error fetching user information:', error);
            }
        };

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