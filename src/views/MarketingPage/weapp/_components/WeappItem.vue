<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: number,
  imgUrl?: string,
  title?: string,
  content?: string,
  date?: string
}>(), {
  imgUrl: 'https://picsum.photos/200/300?1',
  title: '标题',
  content: '内容',
  date: '2021-09-01',
  id: -1
})
const emits = defineEmits(['edit:id'])
function handleEdit() {
  emits('edit:id', props.id)
}
</script>

<template>
  <div class="w-full h-[320px] mb-2 cursor-pointer">
    <el-card class="global-card flex justify-center items-center p-4 w-full h-full">
      <div class="w-full h-1/2 mb-2 flex overflow-hidden">
        <img :src="imgUrl" alt="" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div class="w-full h-auto flex text-start overflow-hidden text-ellipsis text-xl font-bold whitespace-nowrap">
        {{ title }}
      </div>
      <div class="w-full h-10 my-2 flex text-start overflow-hidden text-ellipsis whitespace-pre-line">
        {{ content }}
      </div>
      <div class="w-full h-auto flex text-start text-[10px] text-gray-300">
        {{ date }}
      </div>
      <div class="w-full h-auto mt-2">
        <el-button class="main_primary_btn w-full" @click="handleEdit">编辑</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
