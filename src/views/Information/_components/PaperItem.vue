<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  index: number,
  title: string,
  description: string
}>(),{
  index: 1
})
const imgUrl = computed(() => {
  return `https://picsum.photos/200/300${props.index}`
})
</script>

<template>
  <div class="w-full h-36 mb-4 flex py-4 items-center cursor-pointer">
    <div class="w-[120px] h-[120px] flex">
      <img :src="imgUrl" alt="" loading="lazy" class="w-full h-full object-cover">
    </div>
    <el-divider direction="vertical" style="height: 100%" />
    <div style="width: calc(100% - 120px)" class="h-full flex flex-col">
      <div class="w-full h-1/2 flex font-bold text-ellipsis overflow-hidden whitespace-nowrap">{{ title }}</div>
      <div class="w-full h-1/2 flex text-ellipsis overflow-hidden whitespace-preline">{{ description ? description : '暂无' }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
