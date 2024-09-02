<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {Document, Operation, Position, Ticket, Warning} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import { useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()


/** =====  菜单设置-start  ===== **/
const defaultSetting = {
  text: '页面设置',
  color: '',
}
const pageSetting = ref<DisplayTypes.pageSetting>(defaultSetting)
const defaultActive = ref<string>('1-1')

// 换页函数
function forbbiden(item: string) {
  router.push(item)
  ElMessage({
    message: '暂未开放',
    type: 'warning',
  })
}
function handleSelect(index: string) {
  switch (index) {
    case '1-1':
      defaultActive.value = '1-1'
      router.push('/marketcenter')
      break;
    case '1-2':
      defaultActive.value = '1-1'
      forbbiden('/marketcenter')
      break;
    case '2-1':
      defaultActive.value = '2-1'
      router.push('/marketcenter/homefitment')
      break;
    case '2-2':
      defaultActive.value = '2-1'
      forbbiden('/marketcenter/homefitment')
      break;
    case '3':
      defaultActive.value = '3'
      router.push('/marketcenter/checkin')
      break;
    case '5':
      defaultActive.value = '5'
      router.push('/marketcenter/weapp')
      break;
  }
}
// 高亮持久化
function highlightMenu() {
  switch (route.fullPath) {
    case '/marketcenter':
      defaultActive.value = '1-1'
      break;
    case '/marketcenter/homefitment':
      defaultActive.value = '2-1'
      break;
    case '/marketcenter/checkin':
      defaultActive.value = '3'
      break;
    case '/marketcenter/weapp':
      defaultActive.value = '5'
      break;
  }
}

onMounted(() => {
  highlightMenu()
})
watch(() => route.fullPath, () => {
  highlightMenu()
})
/** =====  菜单设置-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-menu
        :active-text-color="pageSetting.color"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#A9A9A9FF"
        style="height: 100%;border-right: 0;"
        @select="handleSelect"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Ticket /></el-icon>
          <span>优惠券</span>
        </template>
        <el-menu-item index="1-1">
          <span>优惠券列表</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <span>用户领取记录</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Operation /></el-icon>
          <span>装修</span>
        </template>
        <el-menu-item index="2-1">
          <span>首页装修</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span>主题风格</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><Position /></el-icon>
        <span>签到配置</span>
      </el-menu-item>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Warning /></el-icon>
          <span>积分管理</span>
        </template>
        <el-menu-item index="4-1">
          <span>积分统计</span>
        </el-menu-item>
        <el-menu-item index="4-2">
          <span>积分商品</span>
        </el-menu-item>
        <el-menu-item index="4-3">
          <span>积分订单</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="5">
        <el-icon><Document /></el-icon>
        <span>公众号管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>

</style>
