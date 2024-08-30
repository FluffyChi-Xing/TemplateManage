<script setup lang="ts">
import {onMounted, ref} from 'vue'
// const props = withDefaults(defineProps<{
//   radioValue: ref<string>
// }>(), {
//   radioValue: '1'
// })
const radioValue = ref('mode1')
const emits = defineEmits(['change:radioValue'])
function handleChange() {
  emits('change:radioValue', radioValue.value)
}
function checkState() {
  let mode = localStorage.getItem('layoutMode')
  if (mode) {
    radioValue.value = mode
  }
}
onMounted(() => {
  checkState()
})
</script>

<template>
  <div class="w-full h-auto flex flex-col mb-2">
    <el-form-item label="布局切换" />
    <el-form-item>
      <el-radio-group
          v-model="radioValue"
          class="w-full"
          @change="handleChange"
      >
        <div class="w-full h-auto grid grid-cols-2 gap-3">
          <el-radio-button
              value="mode1"
          >
            <template #default>
              <div class="w-full h-[100px] flex flex-col">
                <div class="w-full h-2 flex bg-mainColor mb-1" />
                <div class="w-full h-20 grid grid-cols-5 gap-1">
                  <div class="w-full h-full bg-gray-300" />
                  <div class="w-full h-full col-span-4 bg-mainLight" />
                </div>
              </div>
            </template>
          </el-radio-button>
          <el-radio-button
              value="mode2"
              class="border-none"
          >
            <template #default>
              <div class="w-full h-[100px] flex flex-col">
                <div class="w-full h-2 bg-mainColor" />
                <div class="w-full h-2 bg-mainLight mb-1" />
                <div class="w-full h-[70px] bg-gray-300" />
              </div>
            </template>
          </el-radio-button>
        </div>
      </el-radio-group>
    </el-form-item>
    <el-divider direction="horizontal" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-radio-button__inner) {
  width: 100%;
  border: 1px solid transparent;
}
:deep(.el-radio-button) {
  .el-radio-button__inner {
    border-radius: 4px;
    border-color: gainsboro;
  }
  &.is-active {
    .el-radio-button__inner {
      background-color: white;
      border-color: theme('colors.mainColor');
      border-radius: 4px;
    }
  }
}
</style>
