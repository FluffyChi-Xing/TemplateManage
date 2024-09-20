<script setup lang="ts">
import {onMounted, ref} from "vue";



const props = withDefaults(defineProps<{
  imgUrl?: string;
  imgName?: string;
}>(), {

})
/** ===== 素材组件初始化-start ===== **/
const url = ref<string>('')
const name = ref<string>('')
function initItem() {
  url.value = props.imgUrl ? props.imgUrl : ''
  name.value = props.imgName ? props.imgName : '暂无文件名'
}


// 图片加载失败处理
function handleError() {
  url.value = 'src/assets/img/error-img.png'
}
onMounted(() => {
  initItem()
})
/** ===== 素材组件初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex cursor-pointer overflow-hidden flex-col img-item">
    <!-- img area -->
    <div
        style="height: calc(100% - 40px)"
        class="w-full flex flex-col justify-center bg-[#ebeef5] overflow-hidden"
    >
      <img
          :src="url"
          alt=""
          class="w-full h-full flex object-contain"
          loading="lazy"
          @error="handleError"
      >
    </div>
    <!-- name area -->
    <div
        class="w-full h-10 flex justify-center text-center"
        style="line-height: 40px;"
    >
      {{ name }}
    </div>
  </div>
</template>

<style scoped>
.img-item {
  border: 1px solid transparent;
  transition: all .3s ease;
  border-radius: 4px;
}

.img-item:hover {
  border: 1px solid theme('colors.mainColor');
}
</style>
