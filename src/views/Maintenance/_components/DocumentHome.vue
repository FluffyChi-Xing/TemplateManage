<script setup lang="ts">
import {$stores} from "../../../composabels/stores";

const pageCommon = $stores.usePageCommon.usePageCommon()
const isRoot = pageCommon.isRoot
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <RouterView v-if="!isRoot" />
    <span v-else>欢迎</span>
  </div>
</template>

<style scoped>

</style>
