<script setup lang="ts">
import {$stores} from "../../../composabels/stores";

const pageCommon = $stores.usePageCommon.usePageCommon()
const isRoot = pageCommon.isRoot
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <RouterView v-if="!isRoot" />
    <div
        v-else
        class="w-full h-full flex flex-col"
    >
      <div class="w-full h-16 flex mb-4">
        <el-card class="global-card w-full h-auto flex p-4">
          <div class="text-black text-xl font-bold">文件管理系统</div>
        </el-card>
      </div>
      <div style="height: calc(100% - 80px)" class="w-full flex flex-col">
        <el-card class="global-card p-4">
          <div class="w-full h-full flex flex-col justify-center items-center">
            <span class="w-auto h-auto text-black font-bold text-xl">文件管理详情页</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
