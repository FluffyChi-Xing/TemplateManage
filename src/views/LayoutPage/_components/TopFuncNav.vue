<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useCounterStore} from "../../../stores/counter";
import { useDark, useToggle } from '@vueuse/core'


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
// 夜间模式
const darkMode = ref<string>('light')
/* ========================= 顶部组件栏数据--end ========================= */

/* ========================= 夜间模式--start ========================= */
const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleTheme = (event: { clientX: any; clientY: any; }) => {
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
  );

  // 兼容性处理
  if (!document.startViewTransition) {
    toggleDark();
    return;
  }
  const transition = document.startViewTransition(async () => {
    toggleDark();
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 600,
          easing: "ease-in",
          pseudoElement: isDark.value
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)"
        }
    );
  });
};
/* ========================= 夜间模式--start ========================= */

onMounted(() => {
  buttons.value = defaultButtons
})
</script>

<template>
  <div class="w-auto h-auto grid grid-cols-4 gap-3 my-auto">
    <!-- full-screen -->
    <!-- refresh-button -->
    <!-- setting -->
    <!-- switch to dark -->
    <div class="w-auto h-10 flex justify-center">
      <el-tooltip
          class="box-item"
          effect="dark"
          content="夜间模式"
          placement="bottom"
      >
        <el-switch
            v-model="darkMode"
            size="small"
            active-value="light"
            active-action-icon="Sunny"
            active-color="#A0CFFF"
            inactive-action-icon="Moon"
            inactive-value="dark"
            class="my-auto"
            @click="toggleTheme"
        />
      </el-tooltip>
    </div>
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
@keyframes animate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

/**
 Animated Theme Toggle
 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}
::view-transition-new(root) {
  z-index: 1;
}
</style>
