<script setup lang="ts">
import { useRoute } from "vue-router";
import {onMounted, ref} from "vue";
import {$apis} from "../../composabels/apis";
import DescriptionBlock from "../../components/DescriptionBlock.vue";
import { useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const index = ref<any>()
function getParams() {
  index.value = route.params.id
  // console.log(index.value)
}
onMounted(() => {
  getParams()
})
function goBack() {
  router.back()
}

/** ===== 文章详情初始化-start ===== **/
interface returnData {
  id: number,
  name: string,
  images: string,
  author: string,
  mp3_url: string,
  comment_nickname: string,
  text: string,
}
const detailData = ref<returnData>()
const isLoading = ref<boolean>(false)
async function getDetailPaper() {
  await $apis.getMoreInfo(index.value).then((res: any) => {
    detailData.value = res.data
    console.log(detailData.value)
  })
}
onMounted(async () => {
  isLoading.value = true
  await getDetailPaper()
  isLoading.value = false
})
/** ===== 文章详情初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-card class="global-card w-full p-4 flex">
      <el-skeleton
          :rows="15"
          animated
          :loading="isLoading"
      >
        <div class="w-full h-full flex flex-col">
          <div class="w-full h-auto flex justify-end">
            <el-button class="main_primary_date_btn" @click="goBack">返回</el-button>
          </div>
          <DescriptionBlock
              :title="String(detailData?.name)"
              :content="String(detailData?.text)"
          />
          <div class="w-full h-60 grid grid-cols-2 gap-4">
            <img :src="detailData?.images" alt="" loading="lazy" class="w-full h-full object-cover" />
          </div>
        </div>
      </el-skeleton>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
