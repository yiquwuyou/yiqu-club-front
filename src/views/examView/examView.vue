<script setup>
import { ref} from 'vue'

const radio2 = ref(['New York']);
const radio3 = ref(['New York']);

const tableRef = ref(null);

const filterTag = function(value, row) {
  return row.difficulty === value;
};

const tableData = [
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: '什么是缓存击穿？',
    difficulty: '高级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
  {
    title: 'Redis的优点有什么？',
    difficulty: '初级',
  },
]
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <div class="chose">
            <el-button type="primary" class="button">
              <div class="button-content">
                <span style="font-size: 18px;">后端</span>
                <br>
                <br>
                <span>34道题</span>
              </div>
            </el-button>
            <el-button type="warning" class="button">
              <div class="button-content">
                <span style="font-size: 18px;">前端</span>
                <br>
                <br>
                <span>6道题</span>
              </div>
            </el-button>
          </div>
          <div class="up">
            <div class="cache">
              <b>缓存:</b>
            </div>
            <div class="select">
              <el-checkbox-group v-model="radio2" size="small">
                <el-checkbox-button value="New York">Redis</el-checkbox-button>
                <el-checkbox-button value="Chicago">数据一致性</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </div>
          <div class="down">
            <div class="sql">
              <b>数据库:</b>
            </div>
            <div class="select">
              <el-checkbox-group v-model="radio3" size="small">
                <el-checkbox-button value="New York">Redis</el-checkbox-button>
                <el-checkbox-button value="Chicago">mysql</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </div>

        </el-header>
        <el-main class="main">
          <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%" height="55vh" >
            <el-table-column label="题目" prop="title" fixed="left" >
              <template #default="{ row }">
                <el-link type="primary" :underline="false">{{ row.title }}</el-link>
              </template>
            </el-table-column>
            <el-table-column
                prop="difficulty"
                label="难度"
                width="100"
                :filters="[
                  { text: '初级', value: '初级' },
                  { text: '高级', value: '高级' },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
            >
              <template #default="scope">
                <el-tag
                    :type="scope.row.difficulty === '初级' ? 'success' : 'error'"
                    disable-transitions
                >{{ scope.row.difficulty }}</el-tag
                >
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
</template>

<style scoped>
  .common-layout {
    height: 85vh;
    width: 60%;
    background-color: white;
    margin-left: 100px;

    .header{
      height: 25vh;
      border-bottom: 1px solid #f5f6f7;

      .chose{
        display: flex; /* 水平排列按钮 */
        align-items: center; /* 垂直居中 */
        justify-content: flex-start;
        margin-top:35px;
        margin-bottom: 20px;

        .button {
          height: 10vh;
          width: 100px;
          padding-left: 0;
          .button-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
        }
      }

      .up{
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: flex-start; /* 水平方向上靠左对齐 */

        .cache{
          display: flex; /* 使用 Flexbox 布局 */
          align-items: center; /* 垂直居中 */
          justify-content: center; /* 水平居中 */
          margin-right: 50px;
        }

        .select {
          display: flex; /* 使用 Flexbox 布局 */
          align-items: center; /* 垂直居中 */
          justify-content: flex-start; /* 水平方向上靠左对齐 */
          margin-top: 2px;
        }
      }

      .down{
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: flex-start; /* 水平方向上靠左对齐 */

        .sql{
          display: flex; /* 使用 Flexbox 布局 */
          align-items: center; /* 垂直居中 */
          justify-content: center; /* 水平居中 */
          margin-right: 35px;
        }

        .select {
          display: flex; /* 使用 Flexbox 布局 */
          align-items: center; /* 垂直居中 */
          justify-content: flex-start; /* 水平方向上靠左对齐 */
          margin-top: 2px;
        }
      }
    }

    .main {
      height: calc(100% - 25vh); /* 自动计算剩余高度 */
    }
  }

  /* 使用深分隔符 */
  ::v-deep(.el-checkbox-button__inner) {
    border: none !important; /* 移除边框 */
  }

  ::v-deep(.el-checkbox-button.is-active .el-checkbox-button__inner) {
    background-color: transparent !important; /* 移除背景色 */
    color: #409EFF; /* 选中状态的颜色 */
  }

  ::v-deep(.el-checkbox-button.is-focus .el-checkbox-button__inner) {
    border: none !important; /* 移除焦点状态下的边框 */
  }

  ::v-deep(.el-checkbox-button__inner:hover) {
    background-color: transparent !important; /* 鼠标悬停时的背景色 */
    color: #409EFF; /* 鼠标悬停时的颜色 */
  }

  ::v-deep(.el-checkbox-button__inner:active) {
    background-color: transparent !important; /* 按下时的背景色 */
    color: #409EFF; /* 按下时的颜色 */
  }

  ::v-deep(.el-table__body tr.el-table__row) {
    height: 50px; /* 自定义高度 */
  }

  ::v-deep(.el-table__body td) {
    padding: 10px 0; /* 调整上下 padding 以增加空间 */
  }

  ::v-deep(.el-table__body-wrapper) {
    overflow-y: scroll; /* 允许垂直滚动 */
    -ms-overflow-style: none; /* IE 和 Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar { /* Webkit 浏览器 */
      width: 0; /* 隐藏滚动条 */
    }
  }
</style>