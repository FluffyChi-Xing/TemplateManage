<script setup lang="ts">
import SvgIcon from "../../../components/SvgIcon.vue";
import {computed} from "vue";
import {$enums} from "../../../composabels/enums";
const props = withDefaults(defineProps<{
  cardIcon: number,
  color1: string,
  color2: string,
  title: string,
  subTitle: string,
}>(), {
  title: '标题',
  subTitle: '副标题',
})
const icon = computed(() => {
  return $enums.IconEnums[props.cardIcon]
})
</script>

<template>
  <div class="w-full h-36 flex">
    <el-card
        class="global-card w-full flex"
    >
      <div
          class="w-full h-full p-4 flex"
          :style="{ background: `linear-gradient(to right, ${props.color1}, ${props.color2})` }"
      >
        <div class="w-24 h-24 my-auto flex">
          <SvgIcon
              :icon="icon"
              size="80px"
          />
        </div>
        <div class="w-full h-full flex flex-col">
          <div class="w-full h-1/2 flex text-white text-xl font-bold">
            <span class="w-full h-auto my-auto text-right overflow-hidden whitespace-nowrap text-ellipsis">
              {{ title }}
            </span>
          </div>
          <div class="w-full h-1/2 flex text-white font-bold">
            <span  class="w-full h-auto my-auto text-right overflow-hidden whitespace-nowrap text-ellipsis">
              {{ subTitle }}
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

</style>
