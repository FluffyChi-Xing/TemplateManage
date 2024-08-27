<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {$apis} from "../../../composabels/apis";
import PaperItem from "./PaperItem.vue";

/** ===== 文章列表初始化-start ===== **/
const paperList = ref<any>()
async function getPaperList() {
  await $apis.getWeiboHot().then((res: any) => {
    paperList.value = res.data
  })
}
onMounted(async () => {
  await getPaperList()
})
/** ===== 文章列表初始化-end ===== **/
</script>

<template>
  <div class="w-full h-auto flex flex-col">
    <el-card class="w-full h-auto global-card p-4">
      <PaperItem
          v-for="(item, index) in paperList"
          :key="index"
          :title="item.title"
          :index="index + 1"
          :description="item.description"
      />
    </el-card>
  </div>
</template>

<style scoped>

</style>
