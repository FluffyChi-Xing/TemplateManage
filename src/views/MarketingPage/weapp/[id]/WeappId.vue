<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const router = useRouter()
const itemId = ref<number>()
function getParams() {
  itemId.value = Number(route.params.id)
}
onMounted(() => {
  getParams()
})
function goBack() {
  router.back()
}
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <span class="w-auto h-auto text-2xl font-bold">
      {{ itemId }}
      <el-button @click="goBack" class="main_primary_btn">返回</el-button>
    </span>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
