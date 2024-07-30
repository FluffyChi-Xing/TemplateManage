<script setup lang="ts">
import {onMounted, ref} from "vue";
const defaultButtons = [
  {
    id: 1,
    name: '全屏',
    icon: 'FullScreen',
    type: 'text'
  },
  {
    id: 2,
    name: '刷新',
    icon: 'Refresh',
    type: 'text'
  },
  {
    id: 3,
    name: '设置',
    icon: 'Setting',
    type: 'text'
  }
]
const buttons = ref<HomePageTypes.TopNavButtons[]>([])
onMounted(() => {
  buttons.value = defaultButtons
})
</script>

<template>
  <div class="w-auto h-auto grid grid-cols-3 gap-3 my-auto">
    <!-- full-screen -->
    <!-- refresh-button -->
    <!-- setting -->
    <div
        v-for="item in buttons"
        class="w-10 h-10 flex justify-center"
    >
      <el-button
          :key="item.id"
          :icon="item.icon"
          :type="item.type"
          style="width: 40px;height: 40px;"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
