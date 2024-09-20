<script setup lang="ts">
import { ref } from "vue";
import {$message} from "../../../composabels/element-plus";
import {Grid, Menu} from "@element-plus/icons-vue";




const emits = defineEmits(['changeLayout'])
/** ===== 页头表单-start ===== **/
// 移动文件夹选择器
interface optionsTypes {
  label: string;
  value: string;
}
const defaultList = [
  {
    label: '文件夹 A',
    value: '1'
  },
  {
    label: '文件夹 B',
    value: '2'
  }
]
const targetAddr = ref<string>('')
const options = ref<optionsTypes[]>(defaultList)

// 搜索文件
const inputValue = ref<string>('')
function handleClose() {
  inputValue.value = ''
}
function handleSearch() {
  if (!inputValue.value) {
    $message({
      type: 'warning',
      message: '请输入文件名'
    })
  }
}

// 布局切换
const layout = ref<string>('1')
function handleLayout() {
  emits('changeLayout', layout.value)
}
/** ===== 页头表单-end ===== **/
</script>

<template>
  <div class="w-full h-14 flex px-4 justify-between items-center banner-pane">
    <div class="w-auto h-full flex">
      <div class="w-auto h-full items-center mr-4 flex">
        <el-button icon="Upload" class="main_primary_btn">上传</el-button>
        <el-button icon="Delete" class="main_danger_btn">删除图片</el-button>
      </div>
      <div class="w-auto h-full flex flex-col justify-center items-center">
        <el-select
            v-model="targetAddr"
            placeholder="移动至..."
            style="width: 140px"
        >
          <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="w-auto h-full flex items-center">
      <el-input
          v-model="inputValue"
          placeholder="请输入文件名"
          style="width: 140px;height: 32px"
          class="mr-4"
          prefix-icon="Search"
          clearable
          @close="handleClose"
          @keydown.enter="handleSearch"
      />
      <el-radio-group
          v-model="layout"
          @change="handleLayout"
      >
        <el-radio-button value="1">
          <el-icon><Menu /></el-icon>
        </el-radio-button>
        <el-radio-button value="2">
          <el-icon><Grid /></el-icon>
        </el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
.banner-pane {
  border-bottom: 1px solid #ebeef5;
}
</style>
