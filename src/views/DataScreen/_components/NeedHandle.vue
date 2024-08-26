<script setup lang="ts">
import SvgIcon from "../../../components/SvgIcon.vue";
import {computed} from "vue";
import {$enums} from "../../../composabels/enums";

const props = withDefaults(defineProps<{
  icon: number,
  title: string,
  account: number
}>(), {
  account: 0,
  title: '暂无'
})

const icon = computed(() => {
  return $enums.handleIconEnums[props.icon]
})
</script>

<template>
  <div class="w-10 h-auto flex flex-col mr-4">
    <div class="w-10 h-10 flex flex-col">
      <el-tooltip
          effect="dark"
          :content="title"
          placement="bottom"
      >
        <SvgIcon
            :icon="icon"
            size="40px"
        />
      </el-tooltip>
    </div>
    <span class="w-full text-center font-bold h-auto text-gray-500">{{ account }}</span>
  </div>
</template>

<style scoped>

</style>
