<script setup lang="ts">
import { ref } from 'vue'
import {$stores} from "../../../composabels/stores";
import { useRouter } from "vue-router";
import {$message} from "../../../composabels/element-plus";



const documentKey = ref<number>()
const baseKey = 123456
const router = useRouter()
/** =====  密码校验-start  ===== **/
const pageStore = $stores.usePageCommon.usePageCommon()
function checkRoot() {
  if (documentKey.value) {
    if (Number(documentKey.value) === baseKey) {
      pageStore.isRoot = true
      router.push('/maintenance/document')
    } else {
      $message({
        type: "warning",
        message: "密码错误"
      })
    }
  } else {
    $message({
      type: "warning",
      message: "请输入密码"
    })
  }
}
/** =====  密码校验-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="w-[300px] h-auto flex flex-col">
      <div class="text-2xl text-mainColor text-center font-bold">文件管理登录</div>
      <div class="w-full h-auto flex flex-col">
        <el-form-item label="密码" class="mt-4 w-full h-auto">
          <div class="w-full h-auto flex">
            <el-input
                v-model="documentKey"
                placeholder="请输入密码"
                prefix-icon="Lock"
                class="w-60 mr-2"
                maxlength="6"
                show-word-limit
                @keydown.enter="checkRoot"
            />
            <el-button @click="checkRoot" class="main_primary_btn" icon="Search">确认</el-button>
          </div>
        </el-form-item>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
