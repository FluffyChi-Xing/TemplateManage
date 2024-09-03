<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import {onMounted, ref} from "vue";
import {$stores} from "../../../composabels/stores";


const router = useRouter()
/** =====  身份校验-start  ===== **/
const pageStore =$stores.usePageCommon.usePageCommon()
function authRoot() {
  if (!pageStore.isRoot) {
    router.push('/maintenance/document/check')
  } else {
    router.push('/maintenance/document')
  }
}

onMounted(() => {
  authRoot()
})
/** =====  身份校验-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
