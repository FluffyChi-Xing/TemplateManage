<script setup lang="ts">
import { ref } from 'vue'
import NoData from '../../../components/NoData.vue'

// notice list
const noticeList = ref<HomePageTypes.Notice[]>([])
</script>

<template>
  <div class="w-full h-full relative block">
    <!-- main description -->
    <div style="height: calc(100% - 70px)" class="w-full relative flex justify-between pt-5">
      <!-- #1 -->
      <div class="w-[66%] h-full relative block">
        <div class="w-full h-[170px] relative block">
          <el-card
              style="height: 100%"
              class="car-hov cursor-pointer"
          >

          </el-card>
        </div>
        <div class="w-full h-8 relative flex justify-end mt-5 mb-5">
          <el-button
              style="background-color: var(--success-theme-color);color: #fff"
              icon="Select"
          >
            进入工作台
          </el-button>
        </div>
        <div style="height: calc(100% - 242px)" class="w-full relative block">
          <el-card
              style="height: 100%"
          >
            <template #header>
              <span>项目概况</span>
            </template>
          </el-card>
        </div>
      </div>
      <!-- #2 -->
      <div class="w-[33%] h-full relative block">
        <el-card
            style="height: 100%"
        >
          <template #header>
            <span>公告板</span>
          </template>
          <div
              v-if="noticeList.length"
              class="w-full h-full bg-red-950 flex flex-col overflow-y-auto scroll-bar-init"
          >

          </div>
          <NoData
              v-else
          />
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-card) {
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px 0, rgba(0, 0, 0, 0.1) 0 0 1px 0;
}
.car-hov {
  background-color: var(--main-theme0color);
}
.car-hov:hover {
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
}
.el-button:focus-visible {
  outline-color: 2px solid var(--success-theme-color-dark);
}
.el-button:hover {
  border-color: var(--success-theme-color-dark);
}
</style>
