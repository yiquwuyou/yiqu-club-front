<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userLoginService } from '@/api/user.js';
import { useUserStore } from '@/stores/index.js';
import { ElMessage } from 'element-plus'; // 假设使用的是 Element Plus

const formModel = ref({
  authCode: '' // 使用的是 authCode
});

const form = ref(null); // 用于存储表单实例
const router = useRouter();
const userStore = useUserStore();

const rules = {
  authCode: [ // 使用的是 authCode
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ]
};

const login = async () => {
  try {
    if (form.value) {
      const valid = await form.value.validate();
      if (!valid) return;
    }

    const res = await userLoginService(formModel.value.authCode);
    console.log(res);
    if (res.success && res.data && res.data.tokenValue) {
      userStore.setSatoken(res.data.tokenValue);
      ElMessage.success('登录成功');
      router.push('/');
    } else {
      ElMessage.error('登录失败：无效的响应数据');
    }
  } catch (error) {
    ElMessage.error('登录失败');
    console.error(error);
  }
};
</script>

<template>
  <div class="login-container">
    <img src="../../assets/img/login_bg.jpg" alt="" class="login-bg">
    <div class="box">
      <div class="content">
        <div class='qrcode-desc'>
          <p>微信扫码关注公众号</p>
          <p>公众号发送 “验证码” 攀登无畏高峰</p>
        </div>
        <div>
          <img src="../../assets/img/login_qrcode.jpg" alt="" class="login-qrcode">
        </div>
        <el-form ref="form" :model="formModel" :rules="rules" class="login-form">
          <el-form-item prop="authCode" class="input-group">
            <el-input v-model="formModel.authCode" style="width: 220px; height: 35px;" placeholder="验证码" />
            <el-button @click="login" style="width: 70px; height: 35px" type="primary" plain>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* 隐藏滚动条 */

  .login-bg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 使图像填充整个容器 */
    z-index: -999;
  }

  .box {
    position: absolute; /* 添加绝对定位 */
    top: 50%; /* 垂直居中 */
    left: 50%; /* 水平居中 */
    transform: translate(60%, -50%); /* 修正偏移量 */
    width: 30%;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.8); /* 设置背景颜色和透明度 */
    border-radius: 10px; /* 设置圆角 */
    z-index: 999;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%; /* 使内容占满整个 .box */
    }

    .qrcode-desc {
      text-align: center;
      margin-bottom: 20px;
    }

    .login-qrcode {
      width: 300px;
      height: 300px;
      margin-bottom: 10px;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .input-group {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 300px;
    }
  }
}
</style>