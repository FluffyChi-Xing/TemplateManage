<script setup lang="ts">
withDefaults(defineProps<{
  src: string
}>(), {

})
</script>

<template>
  <div class="w-full h-36 flex relative">
    <el-card class="global-card w-full">
      <img class="w-full h-full object-cover cursor-pointer" :src="src" alt="" loading="lazy" />
      <div class="w-auto h-auto flex ads-logo text-center text-white bottom-[10px] right-[10px] absolute text-[10px]">广告</div>
    </el-card>
  </div>
</template>

<style scoped>
.ads-logo {
  border-radius: 2px;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  background-color: rgba(204, 204, 204, 0.6);
}
</style>
