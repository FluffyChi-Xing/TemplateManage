<script setup lang="ts">
withDefaults(defineProps<{
  title?: string,
  content?: string,
}>(),{
  title: '标题',
  content: '内容'
})
</script>

<template>
  <div
      class="w-full h-auto my-4"
  >
    <div class="w-full h-12 flex flex-row">
      <span
          class="text-[2.2rem] font-bold"
          style="color: var(--el-text-color-primary)"
      >
        {{  title  }}
      </span>
    </div>
    <div class="w-full h-auto whitespace-pre-line text-ellipsis overflow-hidden mt-4">
      <span
          class="text-[1rem]"
          style="color: var(--el-text-color-primary)"
      >
        {{content}}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
