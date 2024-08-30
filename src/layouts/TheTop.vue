<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import TopFuncNav from "../views/LayoutPage/_components/TopFuncNav.vue";


const router = useRouter()
const title = ref<string>('中台管理系统')
function goHome() {
  router.push('/')
}
</script>

<template>
  <div
      class="w-full the-header h-[60px] shadow-md relative flex"
  >
    <!-- title -->
    <div
        class="w-[180px] h-full relative flex justify-center cursor-pointer text-white text-2xl font-bold"
        @click="goHome"
    >
      <!-- title -->
      <span
          class="w-auto h-auto relative block my-auto"
      >
              {{ title }}
            </span>
    </div>
    <!-- function banner -->
    <div class="w-auto h-full relative flex ml-auto">
      <TopFuncNav />
    </div>
  </div>
</template>

<style scoped>
.the-header {
  background: linear-gradient(90deg, #1E2938, #517BA8);
}
</style>
