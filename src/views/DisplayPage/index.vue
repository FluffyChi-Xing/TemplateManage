<script setup>

</script>

<template>
  <div class="w-screen h-screen relative block">
    <!-- header -->
    <div class="w-full h-[60px] z-[299] relative flex px-5 justify-between bg-white shadow-sm">
      <!-- #1 -->
      <div class="w-[150px] h-full relative flex justify-center">
        <span class="text-center my-auto text-black font-bold">中台管理系统模板</span>
      </div>
      <!-- #2 -->
      <div class="w-auto h-full relative flex">

      </div>
    </div>
    <!-- body -->
    <div style="height: calc(100% - 60px);background-color: var(--el-bg-color)" class="w-full relative block">
      <div class="w-2/3 h-full flex mx-auto justify-center">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
