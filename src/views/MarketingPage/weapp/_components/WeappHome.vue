<script setup lang="ts">
import { ref } from 'vue'
import {ElMessage} from "element-plus";
import { useRouter } from "vue-router";
import WeappItem from "./WeappItem.vue";


const router = useRouter()
/** =====  顶部搜索-start  ===== **/
const searchValue = ref<string>('')
function handleSearch() {
  if (!searchValue.value) {
    ElMessage({
      type: "warning",
      message: "请输入搜索内容"
    })
  }
}
/** =====  顶部搜索-end  ===== **/

/** =====  新增文章-start  ===== **/
function handleAdd() {
  router.push('/marketcenter/weapp/add')
}
/** =====  新增文章-end  ===== **/

/** =====  编辑文章-start  ===== **/
function handleEdit(index: number) {
  router.push(`/marketcenter/weapp/${index}`)
}
/** =====  编辑文章-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex- flex-col">
    <el-card class="global-card w-full h-auto flex p-4 mb-4">
      <div class="w-full h-full flex flex-col">
        <div class="text-xl font-bold w-full h-auto mb-4">公众号管理</div>
        <div class="w-full h-auto flex">
          <el-form-item label="搜索文章">
            <div class="w-full h-auto flex mr-2">
              <el-input
                  v-model="searchValue"
                  placeholder="请输入文章标题"
                  clearable
                  class="mr-2"
                  @keydown.enter="handleSearch"
              />
              <el-button icon="Search" class="main_primary_btn" @click="handleSearch">搜索</el-button>
            </div>
          </el-form-item>
          <el-button class="main_primary_date_btn" icon="Plus" @click="handleAdd">新增文章</el-button>
        </div>
      </div>
    </el-card>
    <div class="w-full h-auto grid grid-cols-4 gap-2">
      <WeappItem
          @edit:id="handleEdit"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
