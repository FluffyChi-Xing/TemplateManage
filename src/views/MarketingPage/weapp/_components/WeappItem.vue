<script setup lang="ts">
import GenerateDialog from "../../../../components/GenerateDialog.vue";
import {computed, ref} from 'vue'
import {ElMessage} from "element-plus";

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
const emits = defineEmits(['edit:id', 'delete:id'])
function handleEdit() {
  emits('edit:id', props.id)
}
/** ===== 删除文章-start ===== **/
const dialogVisible = ref<boolean>(false)
function handleDelete() {
  dialogVisible.value = true
}
function submitDelete() {
  dialogVisible.value = false
  emits('delete:id', props.id)
  ElMessage({
    type: "success",
    message: "删除成功"
  })
}
/** ===== 删除文章-end ===== **/
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
      <div class="w-full h-auto mt-2 grid grid-cols-3 gap-2">
        <div class="w-full h-auto col-span-2 flex">
          <el-button class="main_primary_btn w-full" @click="handleEdit">编辑</el-button>
        </div>
        <div class="w-full h-auto flex col-span-1">
          <el-button class="main_danger_btn w-full" @click="handleDelete">删除</el-button>
        </div>
      </div>
    </el-card>
    <GenerateDialog
        v-model:visible="dialogVisible"
        :is-default="false"
        title="提示"
        :confirm-func="submitDelete"
    >
      <div class="text-xl font-bold">你确定要删除<span class="text-red-400 mx-1">{{ title }}</span> 吗？</div>
    </GenerateDialog>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
