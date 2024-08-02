<script setup lang="ts">
import {ref} from "vue";
import 'highlight.js/styles/atom-one-dark.css'

const show = ref<boolean>(false)
withDefaults(defineProps<{
  code: string,
}>(), {
  code: ''
})
</script>

<template>
  <div class="w-full h-auto flex flex-col example-show">
    <slot />
    <!-- option button banner -->
    <div class="w-full h-16 p-4 flex justify-end example-option">
      <el-tooltip
          class="box-item"
          effect="dark"
          content="查看源代码"
          placement="bottom"
      >
        <el-button
            icon="Switch"
            type="text"
            class="my-auto"
            size="large"
            @click="show = !show"
        />
      </el-tooltip>
    </div>
    <!-- folder -->
    <el-collapse-transition>
      <div
          v-show="show"
          class="w-full h-auto p-4"
      >
        <pre>
          <code>{{ code }}</code>
        </pre>
      </div>
    </el-collapse-transition>
  </div>
</template>

<style scoped>
.example-show {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
}
.example-option {
  border-top: 1px solid var(--el-border-color);
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
