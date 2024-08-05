<script setup lang="ts">
withDefaults(defineProps<{
  title: string,
  subTitle: string,
  icon: string,
}>(), {
  title: 'Title',
  subTitle: 'SubTitle',
  icon: 'icon'
})
</script>

<template>
  <div
      class="w-[350px] h-[170px] block p-4 rounded-[12px] overflow-hidden"
      style="background-color: var(--vp-c-bg-soft);color: var(--el-text-color-primary)"
  >
    <div
        class="w-full h-1/2 flex"
    >
      <div class="w-12 h-12 my-auto p-1 flex justify-center text-[24px] rounded-[12px] bg-[#E7E8EC]">
        {{ icon }}
      </div>
    </div>
    <div
        class="w-full h-1/2 flex flex-col"
    >
      <div
          class="w-full h-1/2 flex text-[16px] font-bold"
      >
        {{ title}}
      </div>
      <div
          class="w-full h-1/2 flex"
      >
        {{ subTitle }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
