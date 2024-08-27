<script setup lang="ts">
import NoData from "../../../components/NoData.vue";

interface bindDataTypes {
  id: string,
  name: string,
  inner: innerDataTypes | null
}
interface innerDataTypes {
  Color?: string,
  Price?: string,
  Capacity?: string,
  Generation?: string
}
withDefaults(defineProps<{
  data: bindDataTypes[]
}>(), {

})
</script>

<template>
  <div class="w-full h-auto flex flex-col">
    <div
        v-if="data?.length"
        class="w-auto h-auto flex"
    >
      <div
          v-for="item in data"
          :key="item.id"
          class="w-full h-10 flex hover:bg-mainColor"
      >
        <div class="w-full h-auto flex justify-between">
          <div class="w-auto h-auto flex text-center text-black">{{ item.id }}</div>
          <div class="w-auto h-auto flex text-center">
            {{ item.name }} | {{ item.inner?.Color }} | {{ item.inner?.Price }} | {{ item.inner?.Capacity }} | {{ item.inner?.Generation }}
          </div>
        </div>
        <el-divider direction="horizontal" />
      </div>
    </div>
    <NoData
        v-else
        description="暂无数据"
        class="w-auto h-auto mx-auto"
    />
  </div>
</template>

<style scoped>

</style>
