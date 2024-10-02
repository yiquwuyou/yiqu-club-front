<script setup>
import { reactive, ref } from 'vue'

const uploadRef = ref(null)
const imgUrl = ref('')
const editable = ref(false)
const buttonText = ref('编辑')
const buttonType = ref('primary')

const form = reactive({
  name: '微信大',
  sex: '男',
  number: '123456789',
  email: '123456789@qq.com',
  introduce: '这个人很懒什么也没有留下。。。',
  avatar: '' // 存储上传后的头像 URL
})

const onUploadFile = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = () => {
    imgUrl.value = reader.result
    form.avatar = reader.result // 更新头像 URL
    ElMessage.success('头像更新成功')
  }
}

const toggleEditable = () => {
  editable.value = !editable.value
  if (editable.value) {
    buttonText.value = '提交'
    buttonType.value = 'success'
  } else {
    buttonText.value = '编辑'
    buttonType.value = 'primary'
  }
}
</script>

<template>
  <div class="avatar">
    <el-container class="avatar-container">
      <el-header class="up"><b>基本信息</b></el-header>
      <el-main class="down">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="用户头像">
            <el-col :span="3">
              <el-upload
                  ref="uploadRef"
                  class="avatar-uploader"
                  :auto-upload="false"
                  :show-file-list="false"
                  :on-change="onUploadFile"
                  v-if="editable"
              >
                <img v-if="imgUrl" :src="imgUrl" class="avatar" />
                <img v-else :src="form.avatar || '../../assets/img/user.jpg'" width="50px" />
              </el-upload>
              <img v-else :src="form.avatar || '../../assets/img/user.jpg'" width="50px" />
            </el-col>
          </el-form-item>
          <el-form-item label="用户昵称">
            <el-input v-model="form.name" v-if="editable" />
            <span v-else>{{ form.name }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.sex" v-if="editable" />
            <span v-else>{{ form.sex }}</span>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.number" v-if="editable" />
            <span v-else>{{ form.number }}</span>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" v-if="editable" />
            <span v-else>{{ form.email }}</span>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input v-model="form.introduce" v-if="editable" />
            <span v-else>{{ form.introduce }}</span>
          </el-form-item>
          <el-form-item>
            <el-button
                :type="buttonType"
                @click="toggleEditable"
            >
              {{ buttonText }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.avatar {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  .avatar-container {
    width: 1000px;
    height: 100%;
    background-color: white;
    margin-left: 180px;

    .up {
      width: 100%;
      height: 6vh;
      line-height: 6vh;
      border-bottom: 1px solid #e5e5e5;
    }

    .down {
      .avatar-uploader {
        :deep() {
          .avatar {
            width: 50px;
            height: 50px;
            display: block;
          }

          .el-upload {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
          }

          .el-upload:hover {
            border-color: var(--el-color-primary);
          }

          .el-icon.avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 50px;
            height: 50px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>