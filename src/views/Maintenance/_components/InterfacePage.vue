<script setup lang="ts">
import { ref } from 'vue'
import SelectTree from "./SelectTree.vue";
// import NoData from "../../../components/NoData.vue";
import GenerateDialog from "../../../components/GenerateDialog.vue";
import { useRouter } from "vue-router";


interface TreeData {
  label: string,
  node?: boolean,
  method?: number,
  children?: TreeData[]
}
const router = useRouter()
/** ===== 后台接口树形菜单初始化-start ===== **/
const defaultBack = [
  {
    label: '展示中心',
    node: true,
    children: [
      {
        label: '表格模块',
        node: true,
        children: [
          {
            label: '获取列表数据',
            node: false,
            method: 0,
          },
          {
            label: '新增数据',
            node: false,
            method: 1
          }
        ]
      },
      {
        label: '库存管理模块',
        node: true,
        children: [
          {
            label: '获取库存列表',
            node: false,
            method: 0
          }
        ]
      }
    ]
  },
  {
    label: '用户中心模块',
    node: true,
    children: [
      {
        label: '获取用户数据',
        node: false,
        method: 0
      }
    ]
  }
]
const backendTreeData = ref<TreeData[]>(defaultBack)
/** ===== 后台接口树形菜单初始化-end ===== **/

/** ===== 同步数据-start ===== **/
const dialogVisible = ref<boolean>(false)
function handleConfirm() {
  dialogVisible.value = false
}
function synchronous() {
  dialogVisible.value = true
}
/** ===== 同步数据-end ===== **/

/** ===== 跳转接口详情页-start ===== **/
function handleClick(node: TreeData) {
  if (!node?.node) {
    // console.log(node?.$treeNodeId)
    router.push(`/maintenance/interface/${node?.$treeNodeId}`)
  }
}
/** ===== 跳转接口详情页-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-16 flex mb-4">
      <el-card class="global-card p-4">
        <div class="w-auto h-full text-xl text-black font-bold">接口管理</div>
      </el-card>
    </div>
    <div style="height: calc(100% - 80px)" class="w-full">
      <el-card class="global-card p-4 overflow-y-auto">
        <div class="w-full h-full flex flex-col">
          <el-tabs class="w-full h-full">
            <el-tab-pane label="管理端接口">
              <div class="w-full h-full grid grid-cols-6 gap-2">
                <div class="col-span-2 w-full h-full flex flex-col">
                  <div class="w-full h-auto grid grid-cols-3 gap-2 mb-2">
                    <div class="w-full h-auto flex col-span-2">
                      <el-button class="main_primary_btn w-full">新增分类</el-button>
                    </div>
                    <div class="w-full h-auto flex col-span-1">
                      <el-button class="main_danger_btn" @click="synchronous">同步</el-button>
                    </div>
                  </div>
                  <div class="w-full h-[500px] flex flex-col">
                    <SelectTree
                        @node-click:node-data="handleClick"
                        :tree-data="backendTreeData"
                    />
                  </div>
                </div>
                <div class="col-span-4 w-full h-full flex flex-col">
                  <RouterView />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="用户端接口">
              <div class="w-full h-full flex flex-col justify-center items-center">
                <span>用户端接口</span>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
      <GenerateDialog
          v-model:visible="dialogVisible"
          :is-default="false"
          title="提示"
          :confirm-func="handleConfirm"
      >
        <span class="w-full h-auto whitespace-pre-line">同步之后，路由文件中新增的接口添加到接口列表中，路由文件中删除的路由会同步的在接口列表中删除</span>
      </GenerateDialog>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
:deep(.el-tabs__content) {
  height: calc(100% - 55px);
}
</style>
