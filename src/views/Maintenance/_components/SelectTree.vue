<script setup lang="ts">
import { ref } from 'vue'

interface TreeData {
  label: string,
  children?: TreeData[]
}
withDefaults(defineProps<{
  treeData: TreeData[]
}>(), {

})
const defaultData = [
  {
    label: '一级',
  },
  {
    label: '二级',
    children: [
      {
        label: '二级-1',
      },
      {
        label: '二级-2',
      }
    ]
  }
]
</script>

<template>
  <div class="w-full h-auto flex flex-col">
    <el-tree
        :data="treeData"
        :props="defaultData"
        accordion
        class="w-full h-auto"
    />
  </div>
</template>

<style scoped>

</style>
