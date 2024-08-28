<script setup lang="ts">
const props = withDefaults(defineProps<{
  searchValue: string
}>(), {

})
const emits = defineEmits(['search'])
function submitSearch() {
  emits('search', props.searchValue)
}
</script>

<template>
  <div class="w-full h-auto flex">
    <el-card class="global-card w-full h-auto p-4 flex">
      <el-form-item>
        <div class="w-full h-auto flex">
          <el-input
              v-model="props.searchValue"
              placeholder="请输入关键字"
              prefix-icon="Search"
              @keydown.enter="submitSearch"
          />
          <el-button
              class="main_primary_btn ml-4"
              @click="submitSearch"
          >
            搜索
          </el-button>
        </div>
      </el-form-item>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
:deep(.el-card__body) {
  width: 100%;
  height: 32px;
  padding: 0;
}
</style>
