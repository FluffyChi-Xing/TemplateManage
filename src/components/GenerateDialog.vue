<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  title: string,
  content?: string,
  size?: number,
  visible?: boolean,
  confirmFunc: () => void,
  isDefault?: boolean,
  showClose?: boolean
}>(),{
  title: '提示',
  size: 500,
  isDefault: true,
  showClose: true
})
const emits = defineEmits<{
  (event: 'update:visible', val: any): void
}>()
const dialogVisible = computed({
  get: () => props.visible,
  set: (val) => emits('update:visible', val)
})
function cancelBtn() {
  dialogVisible.value = false
}
</script>

<template>
  <div class="w-auto h-auto flex justify-center">
    <el-dialog
        v-model="dialogVisible"
        :width="Number(props.size)"
        :show-close="showClose"
    >
      <template #header>
        <span class="text-black text-xl font-bold">{{ title }}</span>
      </template>
      <div
          v-if="props.isDefault"
          class="w-full h-auto flex justify-start"
      >
        <span class="text-black text-xl">{{ content }}</span>
      </div>
      <div
          v-if="props.content"
          v-html="content"
      />
      <slot />
      <template #footer>
        <el-button @click="cancelBtn" class="main_primary_btns_date">
          取消
        </el-button>
        <el-button class="main_primary_btns ml-2">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>
