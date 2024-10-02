import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

// 用户模板 token setToken removeToken
export const useUserStore = defineStore(
  'yiqu-user',
  () => {
    const satoken = ref('')
    const setSatoken = (newSatoken) => {
      satoken.value = newSatoken
    }
    const removeSatoken = () => {
      satoken.value = ''
    }
    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }
    const setUser = (obj) => {
      user.value = obj
    }
    return {
      satoken,
      setSatoken,
      removeSatoken,
      user,
      getUser,
      setUser
    }
  },
  {
    persist: true
  }
)
