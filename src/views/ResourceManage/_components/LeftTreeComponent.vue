<script setup lang="ts">
import { ref } from "vue";


// props definition
withDefaults(defineProps<{

}>(), {

})



const emits = defineEmits(['addCategory'])
/** ===== 文件树目录初始化-start ===== **/
interface treeTypes {
  icon?: string | null;
  label?: string;
  children?: treeTypes[];
}

// 静态目录暂时
const list = [
  {
    label: '文件夹 A',
    children: [
      {
        label: '文件夹 A-1',
        children: [
          {
            label: '文件 A-1-1'
          },
          {
            label: '文件 A-1-2'
          }
        ]
      }
    ]
  },
  {
    label: '文件夹 B',
    children: [
      {
        label: '文件夹 B-1',
        children: [
          {
            label: '文件 B-1-1'
          },
          {
            label: '文件 B-1-2'
          }
        ]
      }
    ]
  }
]
const treeData = ref<treeTypes[]>(list);
// 添加分类
function handleAdd() {
  emits('addCategory', true)
}
/** ===== 文件树目录初始化-end ===== **/
</script>

<template>
  <div class="w-60 h-full flex flex-col tree-menu overflow-hidden">
    <div class="w-full h-20 flex justify-center items-center">
      <el-button icon="Plus" class="main_primary_btn" @click="handleAdd">添加分类</el-button>
    </div>
    <el-tree
        :data="treeData"
        :props="{ label: 'label', children: 'children' }"
    >
      <template #empty>
        <el-empty
            description="暂无数据"
        />
      </template>
    </el-tree>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
.tree-menu {
  border-right: 1px solid #ebeef5;
}
</style>
