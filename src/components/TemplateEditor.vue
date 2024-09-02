<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, shallowRef, watch} from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

const props = withDefaults(defineProps<{
  innerHtml: string
}>(), {

})

/** =====  富文本编辑器-start  ===== **/
const editorRef = shallowRef()
const valueHtml = ref<string>()
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const mode = 'default'
const editor = editorRef.value
const emits = defineEmits(['update:innerHtml'])
// 输入数据回传
function handleUpdate() {
  emits('update:innerHtml', valueHtml.value)
  // console.log('submit')
}
function initContent() {
  setTimeout(() => {
    valueHtml.value = props.innerHtml || '<p>占位内容</p>'
  }, 1000)
  // console.log(valueHtml.value)
}
onMounted(() => {
  initContent()
})
// 监听富文本内容变化
let timer: ReturnType<typeof setTimeout> | null = null

watch(() => valueHtml.value, () => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    handleUpdate()
  }, 1000)
})
onBeforeUnmount(() => {
  if (editor == null) return
  editor.destroy()
})
/** =====  富文本编辑器-end  ===== **/
</script>

<template>
  <div
      style="border: 1px solid #ccc"
      class="w-full h-auto flex flex-col"
  >
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 180px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
    />
  </div>
</template>

<style scoped>

</style>
