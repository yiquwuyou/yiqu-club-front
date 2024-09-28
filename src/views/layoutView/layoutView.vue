<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'

const router = useRouter()

//定义菜单选择事件
function handleSelect(key, keyPath) {
  console.log(key, keyPath);
  router.push(key);
}

//定义搜索框变量
const input3 = ref('')

// 处理头像点击事件
function handleAvatarClick() {
  // 替换为你要跳转的路径
  router.push('/function/user')
}
</script>

<template>
  <el-container class="layout-container">
    <el-header class="header">
      <div class="flex-container">
        <img src="../../assets/img/logo.jpg" alt="logo" class="logo">
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="/function/exam">刷题</el-menu-item>
          <el-menu-item index="/function/exercise">练习</el-menu-item>
          <el-menu-item index="/function/flower">风花雪月</el-menu-item>
          <el-menu-item index="/function/interview">模拟面试</el-menu-item>
        </el-menu>
        <el-link type="primary" :underline="false" class="el-link">与作者通电</el-link>
        <div class="search">
          <el-input
              v-model="input3"
              style="max-width: 600px"
              placeholder="请输入感兴趣的内容~"
              class="input-with-select"
          >
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
        <el-link type="primary" @click="handleAvatarClick" class="img">
          <img src="../../assets/img/user.jpg" alt="头像" class="user">
        </el-link>
      </div>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>

.layout-container{
  height:100vh;
  width: 100%;
  background-color: #f5f6f7;

  .header{
    width: 100%;
    height: 7.6vh; /* 高度占满header */
    background-color: white;
    display: flex; /* 使用Flexbox */
    align-items: center; /* 垂直居中 */
    justify-content: space-between; /* 水平方向上平均分配剩余空间 */

    .flex-container {
      display: flex; /* 子元素使用Flexbox */
      align-items: center; /* 垂直居中 */
      width: 100%; /* 占满header宽度 */

      .logo{
        height: 7.6vh;
        width: auto; /* 宽度自适应 */
        max-width: 120px;
        margin-left: 60px;
      }

      .el-menu-demo{
        height: 100%;
        width: 600px;
      }

      .el-link{
        margin-left: 140px;
        margin-right: 8px;
      }

      .search{
        .input-with-select{
          height: 4vh;
        }
      }

      .img {
        display: flex;
        justify-content: flex-end;
        margin-left: 10px;
        cursor: pointer; /* 鼠标悬停时变为手指形状 */
      }

      .user {
        height: 4vh;
        width: 4vh; /* 使宽度等于高度，保持方形 */
        border-radius: 0; /* 正方形头像 */
      }
    }

  }
}
</style>