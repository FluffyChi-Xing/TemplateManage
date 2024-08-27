<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {$apis} from "../../composabels/apis";
import HotSearch from "./_components/HotSearch.vue";
import NoData from "../../components/NoData.vue";
/** ===== 贴吧热搜初始化-start ===== **/
const tiebaSearch = ref<any>()
async function getTiebaList() {
  await $apis.getTiebaHot().then((res: any) => {
    tiebaSearch.value = res.data
  })
}
onMounted(async () => {
  await getTiebaList()
})
/** ===== 贴吧热搜初始化-end ===== **/
</script>

<template>
  <div class="w-full flex flex-col p-4">
    <div class="w-full h-full grid grid-cols-4 gap-4">
      <div class="w-full h-full" />
      <div class="col-span-2 h-full p-4 flex flex-col">
        <router-view />
      </div>
      <div class="w-full h-auto">
        <el-card class="global-card sticky top-[32px] w-full p-4 h-[500px]">
          <template #header>
            <span class="text-xl font-bold">贴吧热搜</span>
          </template>
          <div
              style="height: calc(100% - 36px)"
              class="w-full overflow-y-auto"
          >
            <HotSearch
                v-if="tiebaSearch"
                :hot-search-list="tiebaSearch"
            />
            <NoData
                v-else
                description="暂无数据"
            />
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-card__header) {
  padding: 0;
  width: 100%;
  height: 36px;
}
</style>
