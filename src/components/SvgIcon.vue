<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  icon: string,
  fill?: string,
  size?: string
}>(), {
  size: '',
  fill: ''
})
const svgClass = computed(() => {
  if (props.icon) {
    return 'svg-icon ' + props.icon
  } else {
    return 'svg-icon'
  }
})
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
const style = computed(() => {
  return props.size ? { fontSize: props.size } : {}
})
</script>

<template>
  <div class="w-auto h-auto flex justify-center">
    <svg
       :class="svgClass"
       :style="style"
       aria-hidden="true"
       v-bind="$attrs"
    >
      <use
          :xlink:href="iconName"
          :fill="fill"
      />
    </svg>
  </div>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
}
</style>
