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
        class="w-[400px] p-4 h-[400px] flex my-auto flex-col justify-center"
    >
      <template #header>
        <span class="text-black font-bold mx-auto">外链拦截</span>
      </template>
      <div class="w-full h-full flex flex-col justify-center">
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

</style>
