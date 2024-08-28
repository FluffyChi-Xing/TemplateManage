<script setup lang="ts">
import { ref } from 'vue'
import {Ticket, Warning} from "@element-plus/icons-vue";

const defaultSetting = {
  text: '页面设置',
  color: '',
}
const pageSetting = ref<DisplayTypes.pageSetting>(defaultSetting)
const defaultActive = ref<string>('1-1')
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-menu
        :active-text-color="pageSetting.color"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#A9A9A9FF"
        style="height: 100%;border-right: 0;"
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
          <el-icon><Warning /></el-icon>
          <span>积分管理</span>
        </template>
        <el-menu-item index="2-1">
          <span>积分统计</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span>积分商品</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <span>积分订单</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped>

</style>
