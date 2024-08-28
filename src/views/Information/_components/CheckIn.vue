<script setup lang="ts">
withDefaults(defineProps<{
  title: string,
  subTitle?: string,
  btnInfo?: string,
  disabled?: boolean
}>(), {
  subTitle: '点亮社区的每一天',
  btnInfo: '签到',
  disabled: false
})

const emits = defineEmits(['checkIn'])
function checkIn() {
  emits('checkIn')
}
</script>

<template>
  <div class="w-full h-auto">
    <el-card class="global-card w-full h-auto flex p-4">
      <div class="w-full h-auto flex">
        <div class="w-1/2 h-full flex flex-col">
          <div class="w-full h-1/2 flex text-start text-mainTitle text-black font-bold">{{ title }}</div>
          <div class="w-full h-1/2 flex text-start">{{ subTitle }}</div>
        </div>
        <div class="w-1/2 h-full flex justify-center my-auto">
          <el-button
              class="main_primary_btn my-auto"
              @click="checkIn"
              :disabled="disabled"
          >
            {{ btnInfo }}
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
