<script setup lang="ts">
import { useRoute } from "vue-router";
import {onMounted, ref, watch} from "vue";


/** ===== 获取接口详情-start ===== **/
const route = useRoute()
const params = ref<number>(27)
const interMethod = ref<number>()
const interName = ref<string>()
const interDesc = ref<string>()
const interIsPublic = ref<string>()
const interUrl = ref<string>()
function getParams() {
  params.value = Number(route.params.id)
}
onMounted(() => {
  getParams()
})
watch(() => route.fullPath, () => {
  getParams()
})
/** ===== 获取接口详情-end ===== **/
// TODO: 1.接口详情信息未提供
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-auto text-xl font-bold mb-2">接口信息</div>
    <el-form label-width="auto">
      <el-form-item label="接口名称">
        <el-input
            v-model="interName"
            disabled
            style="width: 480px"
        />
      </el-form-item>
      <el-form-item label="请求类型">
        <el-input
            v-model="interMethod"
            disabled
            style="width: 480px"
        />
      </el-form-item>
      <el-form-item label="功能描述">
        <el-input
            v-model="interDesc"
            disabled
            style="width: 480px"
        />
      </el-form-item>
      <el-form-item label="是否公开">
        <el-input
            v-model="interIsPublic"
            disabled
            style="width: 480px"
        />
      </el-form-item>
      <el-form-item label="请求地址">
        <el-input
            v-model="interUrl"
            disabled
            style="width: 480px"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
