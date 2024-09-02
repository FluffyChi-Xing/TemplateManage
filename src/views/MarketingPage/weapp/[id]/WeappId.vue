<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import {computed, onMounted, ref, watch} from "vue";
import {$stores} from "../../../../composabels/stores";
import TemplateEditor from "../../../../components/TemplateEditor.vue";
import {$message} from "../../../../composabels/element-plus";

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
function cancelEdit() {
  router.back()
}
const imgUrl = ref<string>()
/** =====  文章编辑-start  ===== **/
const title = ref<string>()
const abstract = ref<string>()
const author = ref<string>()
const picUrl = ref<string>()
const content = ref<string>('内容')
const weappStore = $stores.weapp.weappStore()
const context = ref<WeappTypes.weappItem>()
const backHtml = ref<string>()
const innerHtml = computed(() => {
  if (context.value?.content) {
    return `<p>${ context.value?.content }</p>`
  } else {
   return `<p>请输入内容</p>`
  }
})
function getContext() {
  context.value = weappStore.weappContent;
  // console.log('context', context.value)
  title.value = context.value?.title || '请输入标题'
  abstract.value = context.value?.abstract || '请输入摘要'
  imgUrl.value = context.value?.imgUrl || 'https://picsum.photos/200/300?1'
  content.value = context.value?.content || ''
}
onMounted(() => {
  getContext()
})
function handleUpdate(key: string) {
  backHtml.value = key
}
function handleSubmit() {
  $message({
    type: "success",
    message: '提交成功'
  })
  router.back()
}
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
          <div class="w-full h-[260px] p-4 item-border flex flex-col">
            <img :src="imgUrl" alt="" class="w-full h-[200px] object-cover">
            <div class="w-full h-auto overflow-hidden text-start text-xl font-bold text-ellipsis whitespace-nowrap">{{ title }}</div>
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
                <el-upload
                    action="#"
                    limit="1"
                >
                  <el-button class="main_primary_btn">上传</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item
                  label="内容"
                  required
              >
                <div class="w-full h-auto flex flex-col">
                  <TemplateEditor
                      :inner-html="innerHtml"
                      @update:inner-html="handleUpdate"
                  />
                </div>
              </el-form-item>
              <el-form-item>
                <div class="w-full h-auto flex justify-between">
                  <el-button class="main_primary_btn" @click="handleSubmit">提交</el-button>
                  <el-button class="main_danger_btn" @click="cancelEdit">取消</el-button>
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
