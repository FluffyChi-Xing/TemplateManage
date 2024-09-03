<script setup lang="ts">
import {ref} from 'vue'
import {$enums} from "../../../composabels/enums";

interface TreeData {
  label: string,
  node?: boolean,
  method?: number,
  children?: TreeData[]
}
withDefaults(defineProps<{
  treeData: TreeData[]
}>(), {

})
const emits = defineEmits(['node-click:nodeData'])
function handleClick(node: TreeData) {
  emits('node-click:nodeData', node)
  // console.log(node)
}
</script>

<template>
  <div class="w-full h-auto flex flex-col">
    <el-tree
        :data="treeData"
        :props="{label: 'label', children: 'children'}"
        accordion
        node-key="id"
        class="w-full h-auto"
        @nodeClick="handleClick"
    >
      <template #default="{ node, data }">
        <div
            v-if="!data.node"
            class="w-full h-auto flex"
        >
          <el-tag v-if="data.method === 0" class="mr-1" size="small" type="success">{{ $enums.SelectTreeEnums[data.method] }}</el-tag>
          <el-tag v-if="data.method === 1" class="mr-1" size="small" type="warning">{{ $enums.SelectTreeEnums[data.method] }}</el-tag>
          <el-tag v-if="data.method === 2" class="mr-1" size="small" type="info">{{ $enums.SelectTreeEnums[data.method] }}</el-tag>
          <el-tag v-if="data.method === 3" class="mr-1" size="small" type="danger">{{ $enums.SelectTreeEnums[data.method] }}</el-tag>
          <div class="text-gray-500 w-auto h-auto">{{ data.label }}</div>
        </div>
        <div
            v-else
            class="w-full h-auto flex text-start"
        >
          {{ data.label }}
        </div>
      </template>
    </el-tree>
  </div>
</template>

<style scoped>

</style>
