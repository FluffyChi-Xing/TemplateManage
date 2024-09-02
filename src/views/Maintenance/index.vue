<script setup lang="ts">
import SideMenu from "./_components/SideMenu.vue";
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-60 h-full flex flex-col">
      <SideMenu />
    </div>
    <div style="width: calc(100% - 240px)" class="h-full flex flex-col p-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
