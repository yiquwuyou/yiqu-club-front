<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const input = ref('')
const router = useRouter()

function handleLogin() {
  const inputValue = input.value.trim()
  if (/^\d+$/.test(inputValue)) { // 检查是否为纯数字
    router.push('/dashboard') // 页面跳转到 /dashboard
    ElMessage.success('登录成功')
  } else {
    ElMessage.error('请输入纯数字验证码')
  }
}
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
        <div class="login-input">
          <el-input v-model="input"  style="width: 220px; height: 35px;"  placeholder="验证码" />
          <el-button @click="handleLogin"  style="width: 70px; height: 35px" type="primary" plain>登录</el-button>
        </div>
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

    .login-input{
      display: flex;
      justify-content: space-between;
      width: 300px;
    }
  }
}


</style>