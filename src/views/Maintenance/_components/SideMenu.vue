<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {Cpu, Document} from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute()
const router = useRouter()
const defaultSetting = {
  text: '页面设置',
  color: '',
}
const pageSetting = ref<DisplayTypes.pageSetting>(defaultSetting)
const defaultActive = ref<string>('1')
/** =====  菜单高亮-start  ===== **/
function highLight() {
  // 处理接口详情页的高亮失效问题
  if (route.fullPath.includes('/maintenance/interface')) {
    defaultActive.value = '2'
  }
  switch (route.fullPath) {
    case '/maintenance':
      defaultActive.value = '1'
      break;
    case '/maintenance/interface':
      defaultActive.value = '2'
      break;
  }
}
onMounted(() => {
  highLight()
})
watch(() => route.fullPath, () => {
  highLight()
})
/** =====  菜单高亮-end  ===== **/

/** =====  菜单跳转-start  ===== **/
function changeRoute(index: string) {
  switch (index) {
    case '1':
      router.push('/maintenance')
      break;
    case '2':
      router.push('/maintenance/interface')
      break;
  }
}
/** =====  菜单跳转-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-menu
        :active-text-color="pageSetting.color"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#A9A9A9FF"
        style="height: 100%;border-right: 0;"
        @select="changeRoute"
    >
      <el-menu-item index="1">
        <el-icon><Document /></el-icon>
        <span>文档管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Cpu /></el-icon>
        <span>接口管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>

</style>
