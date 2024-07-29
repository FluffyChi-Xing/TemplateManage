<script setup lang="ts">
withDefaults(defineProps<{
  title: string,
  subTitle: string,
  defaultTip: boolean,
  successTip: boolean,
  warningTip: boolean,
  dangerTip: boolean
}>(), {
  title: '暂无数据',
  subTitle: '暂无数据',
  defaultTip: true,
  successTip: false,
  warningTip: false,
  dangerTip: false
})
</script>

<template>
  <div
      class="w-full h-auto px-4 py-2 rounded-[4px] overflow-hidden"
      :class="{
        'custom-tip-default': defaultTip,
        'custom-tip-success': successTip,
        'custom-tip-warning': warningTip,
        'custom-tip-danger': dangerTip
      }"
  >
    <slot />
    <div class="w-full h-5 whitespace-nowrap text-ellipsis overflow-hidden">
      <span class="text-black text-5 font-bold">{{ title }}</span>
    </div>
    <div class="w-full h-5 whitespace-nowrap text-ellipsis overflow-hidden mt-4">
      <span class="text-black text-4">{{ subTitle }}</span>
    </div>
  </div>
</template>

<style scoped>
.custom-tip-default {
  background-color: var(--main-theme0color-light);
  border-radius: 4px;
  border-left: 5px solid var(--main-theme0color-dark);
}
.custom-tip-success {
  background-color: var(--success-theme-color-light);
  border-radius: 4px;
  border-left: 5px solid var(--success-theme-color-dark);
}
.custom-tip-warning {
  background-color: var(--warning-theme-color-light);
  border-radius: 4px;
  border-left: 5px solid var(--warning-theme-color-dark);
}
.custom-tip-danger {
  background-color: var(--danger-theme-color-light);
  border-radius: 4px;
  border-left: 5px solid var(--danger-theme-color-dark);
}
</style>
