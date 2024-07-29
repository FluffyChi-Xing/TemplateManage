<script setup lang="ts">
withDefaults(defineProps<{
  description: string
}>(), {
  description: '暂无数据'
})
</script>

<template>
  <div class="w-auto h-auto my-auto">
    <ElEmpty
        :description="description"
    />
  </div>
</template>
