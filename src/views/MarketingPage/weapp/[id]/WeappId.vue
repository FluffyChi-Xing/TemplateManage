<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const router = useRouter()
const itemId = ref<number>()
function getParams() {
  itemId.value = Number(route.params.id)
}
onMounted(() => {
  getParams()
})
function goBack() {
  router.back()
}
const imgUrl = ref<string>('https://picsum.photos/200/300?1')
/** =====  文章编辑-start  ===== **/
const title = ref<string>()
const abstract = ref<string>()
const author = ref<string>()
const picUrl = ref<string>()
const content = ref<string>('内容')
/** =====  文章编辑-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <el-card class="global-card w-full h-full flex flex-col p-4">
      <div class="w-full flex h-auto justify-end mb-2">
        <el-button @click="goBack" class="main_primary_btn">返回</el-button>
      </div>
      <div style="height: calc(100% - 32px)" class="w-full grid grid-cols-5 gap-2">
        <div class="col-span-1 w-full h-full flex flex-col">
          <div class="w-full h-[250px] p-4 item-border flex flex-col">
            <img :src="imgUrl" alt="" class="w-full h-[200px] object-cover">
            <div class="w-full text-start text-xl font-bold">标题</div>
          </div>
        </div>
        <div class="col-span-4 w-full h-full flex">
          <div class="w-2/3 h-full flex flex-col mx-auto">
            <el-form label-width="auto">
              <el-form-item
                  label="标题"
                  required
              >
                <el-input
                    v-model="title"
                    placeholder="请输入标题"
                    clearable
                />
              </el-form-item>
              <el-form-item
                  label="摘要"
                  required
              >
                <el-input
                    v-model="abstract"
                    placeholder="请输入摘要"
                    clearable
                />
              </el-form-item>
              <el-form-item
                  label="作者"
                  required
              >
                <el-input
                    v-model="author"
                    placeholder="请输入作者"
                    clearable
                />
              </el-form-item>
              <el-form-item
                  label="封面"
                  required
              >
                <div class="w-full h-auto" />
              </el-form-item>
              <el-form-item
                  label="内容"
                  required
              >
                <div class="w-full h-auto" />
              </el-form-item>
              <el-form-item>
                <div class="w-full h-auto flex justify-between">
                  <el-button class="main_primary_btn">添加</el-button>
                  <el-button class="main_danger_btn">取消</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
.item-border {
  border: 1px solid gray;
  border-radius: 4px;
}
</style>
