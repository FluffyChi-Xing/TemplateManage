<script setup lang="ts">
import { useRoute,useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const params = route.params

function goBack() {
  router.back()
}
function jump2Outer() {
  window.open(String(params?.id), '_blank')
}
</script>

<template>
  <div class="w-full h-full flex justify-center p-4">
    <el-card
        class="w-[400px] p-4 flex my-auto flex-col justify-center"
    >
      <template #header>
        <div class="w-full h-10 flex justify-start px-4">
          <span class="text-white font-bold my-auto">外链拦截</span>
        </div>
      </template>
      <div class="w-full h-auto p-4 flex flex-col justify-center">
        <div class="text-xl w-auto h-auto my-auto text-black font-bold">
          你确定要访问
          <span class="text-gray-500 hover:text-[#79BBFF] cursor-pointer text-xl mx-2">{{ params?.id }}</span>
          吗?
        </div>
      </div>
      <template #footer>
        <div class="w-full h-auto flex justify-end">
          <el-button class="main_primary_btns_date mr-2" @click="goBack">取消</el-button>
          <el-button class="main_primary_btns" @click="jump2Outer">确定</el-button>
        </div>
      </template>
    </el-card>
  </div>
</template>

<style scoped>
:deep(.el-card__header) {
  width: 100%;
  padding: 0;
  background: linear-gradient(90deg, #1E2938, #517BA8);
}
:deep(.el-card) {
  padding: 0;
}
</style>
