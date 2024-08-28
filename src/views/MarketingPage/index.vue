<script setup lang="ts">

import SideMenu from "./_components/sideMenu.vue";
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-60 h-full flex flex-col bg-yellow-500">
      <SideMenu />
    </div>
    <div style="width: calc(100% - 240px)" class="h-full p-4 flex">
      <div class="w-full h-full flex overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
