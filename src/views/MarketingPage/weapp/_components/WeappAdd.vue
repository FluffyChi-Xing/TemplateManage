<script setup lang="ts">
import { useRouter } from "vue-router";


const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <span class="w-auto h-auto flex text-2xl">
      新增文章
      <el-button class="main_primary_btn" @click="goBack">
        返回
      </el-button>
    </span>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
