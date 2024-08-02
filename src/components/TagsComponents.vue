<script setup lang="ts">
import { useRouter } from "vue-router";

const props = withDefaults(defineProps<{
  tags: HomePageTypes.tagsComponent[],
  size: 'large' | 'default' | 'small',
  type: 'success' | 'info' | 'warning' | 'danger' | 'primary' ,
  closable: boolean,
  color: string,
  disableTransitions: boolean,
  effect: 'dark' | 'light' | 'plain',
  hit: boolean,
  round: boolean
}>(), {
  size: 'large',
  type: 'success',
  closable: false,
  color: '',
  disableTransitions: false,
  effect: 'dark',
  hit: false,
  round: false
})
const router = useRouter()
/* ========================= tags跳转--start ========================= */
function jumpsRoute(item: string) {
  router.push(item)
}
function removeTag(index: HomePageTypes.tagsComponent) {
  if (props.tags.length === 1) {
    router.push('/')
  } else {
    props.tags.splice(index, 1)
  }
}
/* ========================= tags跳转--start ========================= */
</script>

<template>
  <div class="w-auto h-auto flex my-auto">
    <el-tag
        v-if="tags.length"
        v-for="tag in tags"
        :key="tag"
        :size="size"
        :type="type"
        :closable="closable"
        :color="color"
        :disable-transitions="disableTransitions"
        :effect="effect"
        :hit="hit"
        :round="round"
        class="mx-3 cursor-pointer"
        @click="jumpsRoute(tag.value)"
        @close="removeTag(tag)"
    >
      {{ tag.text }}
    </el-tag>
    <el-tag
        v-else
        :size="size"
        :type="type"
        :closable="closable"
        :color="color"
        :disable-transitions="disableTransitions"
        :effect="effect"
        :hit="hit"
        :round="round"
        class="mx-3 cursor-pointer"
    >
      首页
    </el-tag>
  </div>
</template>

<style scoped>

</style>
