<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full flex justify-center p-4 scroll-bar-init overflow-hidden">
    <div class="w-full has-footer flex flex-col justify-center align-middle">
      <el-card class="global-card flex p-4 mb-4 h-20">
        <div class="w-full h-full flex align-middle">
          <span class="text-xl text-black font-bold my-auto">库存管理</span>
          <div class="w-auto h-auto my-auto ml-auto flex">
            <el-button class="main_primary_btns_date">
              清空库存
            </el-button>
            <el-button class="main_primary_btns ml-2">
              新建库存
            </el-button>
          </div>
        </div>
      </el-card>
      <el-card class="global-card flex flex-col p-4">

      </el-card>
    </div>
  </div>
</template>

<style scoped>

</style>
