<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useCounterStore} from "../../../stores/counter";


const page = useCounterStore()
/* ========================= 顶部组件栏数据--start ========================= */
const defaultButtons = [
  {
    id: 1,
    text: '全屏',
    icon: 'FullScreen',
    type: 'text',
    option: () => fullScreen()
  },
  {
    id: 2,
    text: '刷新',
    icon: 'Refresh',
    type: 'text',
    option: () => refresh()
  },
  {
    id: 3,
    text: '设置',
    icon: 'Setting',
    type: 'text',
    option: () => editPage()
  }
]
const buttons = ref<HomePageTypes.TopNavButtons[]>([])
// 页面全屏功能
function fullScreen() {
  // 获取页面元素
  const el = document.documentElement
  // 判断当前页面是否全屏
  if (document.fullscreenElement) {
    // 退出全屏
    document.exitFullscreen()
  } else {
    // 进入全屏
    el.requestFullscreen()
  }
}
// 页面刷新功能
function refresh() {
  location.reload()
}
// 页面编辑
function editPage() {
  if (page.editDrawer) {
    page.editDrawer = false
  } else {
    page.editDrawer = true
  }
}
/* ========================= 顶部组件栏数据--end ========================= */

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
        :key="item.id"
        class="w-10 h-10 flex justify-center"
    >
      <el-tooltip
          class="box-item"
          effect="dark"
          :content="item.text"
          placement="bottom"
      >
        <el-button
            :icon="item.icon"
            :type="item.type"
            @click="item.option"
            style="width: 40px;height: 40px;"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<style scoped>

</style>
