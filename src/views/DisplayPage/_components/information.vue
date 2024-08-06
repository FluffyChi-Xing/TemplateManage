<script setup lang="ts">
import { ref } from 'vue'
import InfoCard from "./InfoCard.vue";
import { useRouter } from 'vue-router'


const router = useRouter()
function quickStart() {
  router.replace('/')
}
/* ========================= 特点卡片数据--start ========================= */
const defaultCard = [
  {
    title: '基于VUE3',
    subTitle: '使用最新的VUE3技术栈',
    icon: '🎉'
  },
  {
    title: '开箱即用',
    subTitle: '内置了常见的的中台组件',
    icon: '📦'
  },
  {
    title: 'TypeScript',
    subTitle: '使用TypeScript编写',
    icon: '🚀'
  }
]
const cardData = ref<DisplayTypes.displayCard[]>(defaultCard)
/* ========================= 特点卡片数据--end ========================= */
</script>

<template>
  <div class="w-full h-full flex flex-col overflow-y-auto smooth-scroll">
    <!-- #1 -->
    <div class="w-full h-[300px] flex">
      <div
          class="w-1/2 h-full flex-col flex"
          style="line-height: 64px"
      >
        <div
            class="w-full text-[40px] font-bold title-clip"
        >
          T-M-S 模板中台系统
        </div>
        <div
            class="w-full text-[40px] font-bold whitespace-pre-line"
            style="color: var(--el-text-color-primary)"
        >
          一款基于 VUE3 + VITE2 + TS4 的中台前端解决方案
        </div>
        <div
            class="w-full h-auto flex mt-4 justify-end px-4"
        >
          <el-button
              style="background-color: var(--main-theme0color-dark);color: #fff"
              round
              size="large"
              @click="quickStart"
          >
            快速开始
          </el-button>
        </div>
      </div>
      <div class="w-1/2 h-full flex justify-center">
        <div
            class="w-[250px] h-[250px] top-[120px] right-[300px] my-auto absolute logo-layer"
        />
        <div
            class="w-[250px] z-[299] h-[250px] my-auto logo-svg"
        />
      </div>
    </div>
    <!-- #2 -->
    <div
        class="w-full h-[300px] grid grid-cols-3 gap-4 mt-4"
    >
      <InfoCard
          v-for="item in cardData"
          :key="item.title"
          :title="item.title"
          :subTitle="item.subTitle"
          :icon="item.icon"
      />
    </div>
  </div>
</template>

<style scoped>
.title-clip {
  background: -webkit-linear-gradient( 120deg, #C6E2FF -80%, #79BBFF );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--main-theme0color-dark);
}
.logo-svg {
  background-image: url("@/assets/logo.svg");
  background-size: contain;
  object-fit: contain;
  background-repeat: no-repeat;
}
.logo-layer {
  background-image: linear-gradient( -45deg, #C6E2FF 30%, #79BBFF );
  filter: blur(72px);
  transform: translate(-50%, -50%);
}
</style>
