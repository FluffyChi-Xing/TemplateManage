<script setup lang="ts">
import SvgIcon from "../../../components/SvgIcon.vue";
import {$enums} from "../../../composabels/enums";
import { useRouter } from "vue-router";


const router = useRouter()
interface hotSearch {
  title: string,
  hot: string,
  url: string,
  description: string,
  updatetime: string
}
withDefaults(defineProps<{
  hotSearchList: hotSearch[]
}>(), {

})
function checkIcon(index: number) {
  switch (index) {
    case 0:
      return $enums.InforEnums[0]
    case 1:
      return $enums.InforEnums[1]
    case 2:
      return $enums.InforEnums[2]
    case 3:
      return $enums.InforEnums[3]
  }
}

// 外链拦截判断
function isBackLinks(item: string) {
  let baseUrl = window.location.origin
  if (item.includes(baseUrl)) {
    return item
  } else {
    router.push(`/backlinks/${item}`)
  }
}
</script>

<template>
  <div class="w-full h-auto flex flex-col">
    <div
        v-for="(item, index) in hotSearchList"
        :key="index"
        class="w-full h-14 flex hover:bg-gray-100 transition-duration-500 mb-2"
        @click="isBackLinks(item.url)"
    >
      <div class="w-10 h-full flex flex-col">
        <div class="w-full h-1/2 text-center flex text-[10px] font-bold">
          {{ index + 1 }}
        </div>
        <div class="w-full h-auto my-auto text-[10px] text-center flex overflow-hidden whitespace-nowrap text-ellipsis">
          {{ item.hot }}
        </div>
      </div>
      <div
          style="width: calc(100% - 96px)"
          class="h-full flex flex-col"
      >
        <div class="w-full h-1/2 text-ellipsis overflow-hidden whitespace-nowrap font-bold">
          {{ item.title }}
        </div>
        <div
            v-if="index === 0"
            class="w-full h-1/2 overflow-hidden text-warning whitespace-nowrap text-ellipsis"
        >
          {{ item.description}}
        </div>
        <div
            v-else-if="index === 1"
            class="w-full h-1/2 overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {{ item.description}}
        </div>
        <div
            v-else-if="index === 2"
            class="w-full h-1/2 overflow-hidden text-mainColor whitespace-nowrap text-ellipsis"
        >
          {{ item.description}}
        </div>
        <div
            v-else
            class="w-full h-1/2 overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {{ item.description}}
        </div>
      </div>
      <div class="w-14 h-full flex justify-center">
        <SvgIcon
            v-if="index < 4"
            :icon="checkIcon(index)"
            size="24px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
